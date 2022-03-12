import classNames from "classnames";
import s from "../Content.module.css"

const SearchProj = () => {
  return (
    <div className={classNames(s.content, s.bgGrey)}>
      <div className={s.container}>
        <section>
          <input
            placeholder="Find your project"
            type="text"
            className={s.projInput}
          />
          <div className={s.projContent}></div>
        </section>
      </div>
    </div>
  );
};

export default SearchProj;
