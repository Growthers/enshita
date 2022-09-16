import type { FC } from "react";
import {
  Title,
  AreaControl,
  InputControl,
  RadioControl,
} from "~/components/apply-form";
import { Wrapper } from "~/components/form-element/wrapper";
import { client, fetcher } from "~/libs/axios";
import useSWR from "swr";
import { Redirect, useLocation } from "wouter";
import type { Event } from "~/types/global-models";
import type { SubmitHandler } from "react-hook-form";
import Button from "~/components/button/button";
import styles from "~/styles/pages/apply.module.scss";
import type { ApplyFormPageProperties, ApplyForm } from "./type/model";
import { schema } from "./type/schema";

const ApplyFormPage: FC<ApplyFormPageProperties> = ({ eventId }) => {
  const { data, error } = useSWR<Event>(`/events/${eventId}`, fetcher);
  const [, setLocation] = useLocation();
  if (!data) return <p>Loading...</p>;
  if (error || data.status !== "open") return <Redirect to="/" />;
  const onSubmit: SubmitHandler<ApplyForm> = result => {
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
    <section className={styles["enshita-apply-form"]}>
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
        schema={schema}
        wrapperStyle={styles["enshita-apply-form-wrapper"]}
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
        <div className={styles["enshita-apply-form-button-box"]}>
          <Button
            variant="normal"
            aria-label="submit"
            type="submit"
            boxStyles={styles["enshita-apply-form-button"]}
            textStyles={styles["enshita-apply-form-button-text"]}
          >
            submit
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export { ApplyFormPage };
