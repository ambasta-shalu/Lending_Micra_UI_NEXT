import SocialIcons from "../SocialIcons";
const Queries = () => {
  return (
    <article>
      <p className="font-bold text-xl mb-3">For any queries</p>
      <div className="font-light leading-10 mb-4">
        <p>Email:info@lendingmicra@gmail.com</p>
        <p>Mobile:123-456-789</p>
      </div>
      <p className="font-bold text-xl mt-3">Find us on</p>
      <div className="w-[250px]">
        <SocialIcons />
      </div>
    </article>
  );
};

export default Queries;
