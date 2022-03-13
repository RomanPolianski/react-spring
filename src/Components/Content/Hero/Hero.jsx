import s from '../Content.module.css'
import classNames from 'classnames'

const Hero = () => {
  return (
    <section>
      <div className={classNames(s.container, s.hero) }>
        <h1 className={classNames (s.h1, s.bold)}>Projects</h1>
        <p className={s.pLarge}>
          From configuration to security, web apps to big data—whatever the
          infrastructure needs <br />
          of your application may be, there is a Spring Project to help you
          build it. Start small and <br />
          use just what you need—Spring is modular by design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
