import ImagePlaceholder from "@/components/image-placeholder";
const IndexPage = ({ searchParams }: any) => {
  const { size = "600x400", bg = "fff", color = "000", text } = searchParams;
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="screenshot">
        <ImagePlaceholder size={size} bg={bg} color={color} text={text} />
      </div>
    </div>
  );
};

export default IndexPage;
