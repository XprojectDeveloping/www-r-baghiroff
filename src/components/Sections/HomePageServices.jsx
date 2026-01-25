function HomePageServices({
  title,
  text,
  cardTitle,
  cardText,
  linkText,
  linkImg,
}) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div>
          <h2 className="text-[4.8rem]">{title}</h2>
        </div>
      </div>
    </>
  );
}
export default HomePageServices;
