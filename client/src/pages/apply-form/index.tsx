import type { FC } from "react";
import {
  Title,
  AreaControl,
  InputControl,
  RadioControl,
  Wrapper,
} from "~/components/apply-form";
import { client, fetcher } from "~/libs/axios";
import useSWR from "swr";
import { Redirect, useLocation } from "wouter";
import type { Event } from "~/types/global-models";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "~/components/button/button";
import type { ApplyFormPageProperties, ApplyForm } from "./type/model";

const ApplyFormPage: FC<ApplyFormPageProperties> = ({ eventId }) => {
  const { data, error } = useSWR<Event>(`/events/${eventId}`, fetcher);
  const [, setLocation] = useLocation();
  if (!data) return <p>Loading...</p>;
  if (error || data.status !== "open") return <Redirect to="/" />;
  const onSubmit: SubmitHandler<ApplyForm> = async result => {
    const url =
      data.status === "suddenOpen"
        ? `/events/${eventId}/form/insert`
        : `/events/${eventId}/form/submit`;
    client
      .post(url, {
        name: result.name,
        email: result.email,
        speakerQuotaTypeId: result.speakerQuotaTypeId,
        title: result.title,
        paragraph: result.paragraph,
      })
      .then(res => {
        if (res.status === 204) {
          setLocation(`/apply/${eventId}/submit`);
        }
      });
  };
  return (
    <section>
      <Title title={data.title} />
      <Wrapper<ApplyForm>
        defaultValues={{
          name: "",
          email: "",
          speakerQuotaTypeId: "",
          title: "",
          paragraph: "",
        }}
        onSubmit={onSubmit}
      >
        <InputControl<ApplyForm>
          label="名前"
          name="name"
          id="name"
          placeholder="名前を入力"
          description="登壇者名として公開されます"
        />
        <InputControl<ApplyForm>
          label="メールアドレス"
          name="email"
          id="email"
          placeholder="メールアドレスを入力"
        />
        <RadioControl<ApplyForm>
          label="登壇枠"
          name="speakerQuotaTypeId"
          items={data.speakerQuotaTypeList}
        />
        <InputControl<ApplyForm>
          label="LTタイトル"
          name="title"
          id="title"
          placeholder="タイトルを入力"
        />
        <AreaControl<ApplyForm>
          label="自由記述欄"
          name="paragraph"
          id="paragraph"
        />
        <div>
          <Button variant="normal" type="submit">
            submit
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export { ApplyFormPage };
