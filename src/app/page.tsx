import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

export default function Home() {
  return (
    <>
      <h1 className="text-center place-self-center">Nonstop Hotel</h1>
      <MuxPlayer
        className="w-[70vw] place-self-center"
        streamType="on-demand"
        playbackId="h5Zw8mW00onfP00DOsrUtLlO9YYKsXtZ39Bk00W0163x4gA"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
      />
      <div className="grid max-h-20 text-center place-self-center">
        <h2>Dir. Mason Mathai</h2>
        <h2>Starring John Hamilton</h2>
        <h2>Score by John Hamilton</h2>
      </div>
    </>
  );
}
