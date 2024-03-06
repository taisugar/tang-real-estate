import Link from "next/link";

export default function VR360Page() {
  return (
    <section>
      <iframe
        src="https://eatonpark.com/360-eaton-park/"
        frameborder="0"
        height="100%"
        width="100%"
        style={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
      <Link
        className="px-6 py-2 absolute bg-[red] text-white rounded-xl top-5 left-5 font-bold"
        href="/"
      >
        Trở lại
      </Link>
    </section>
  );
}
