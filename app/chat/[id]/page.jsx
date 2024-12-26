import Conversations from "@/app/components/Conversations";

export default async function Page({ params }) {
  const id = (await params).id;
  return <Conversations id={id} />;
}
