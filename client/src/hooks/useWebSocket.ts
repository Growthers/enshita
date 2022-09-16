import { useState, useEffect, useRef } from "react";
import { CommentProperties, SceneType } from "~/components/stream/type/model";

const useWebSocket = (webSocketOrigin: string) => {
  const webSocketRef = useRef<WebSocket>();

  const [commentsList, setCommentsList] = useState<CommentProperties[]>(
    [] as CommentProperties[],
  );
  const [speakerQuotaTypeId, setSpeakerQuotaTypeId] = useState<string>("");
  const [scene, setScene] = useState<SceneType>("SPEAKING");

  useEffect(() => {
    webSocketRef.current = new WebSocket(webSocketOrigin);
    const webSocketCurrent = webSocketRef.current;

    webSocketRef.current.addEventListener("message", event => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case "SCENE_CHANGE":
          setScene(message.payload.sceneType);
          break;

        case "CHANGE_VOLUME":
          break;

        case "MESSAGE_UPDATE":
          break;

        case "COMMENTS":
          setCommentsList(prevCommentList => [
            ...prevCommentList,
            message.payload,
          ]);
          break;

        case "SPEAKER_CHANGED":
          setSpeakerQuotaTypeId(message.payload.speakerQuotaTypeId);
          break;

        default:
          break;
      }
    });
    return () => webSocketCurrent.close();
  }, [webSocketOrigin]);

  return { scene, commentsList, speakerQuotaTypeId };
};

export default useWebSocket;
