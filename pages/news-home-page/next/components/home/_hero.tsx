export default function Hero() {
  return (
    <div className="hero space-y-4 md:space-y-8">
      <picture className="hero_picture">
        <source
          srcSet="/images/image-web-3-mobile.jpg"
          media="(max-width: 640px)"
        />
        <source
          srcSet="/images/image-web-3-desktop.jpg"
          media="(min-width: 640px)"
        />
        <img src="/images/image-web-3-mobile.jpg" alt="Image of Web 3.0" />
      </picture>

      <div className="hero_container space-y-4 md:flex md:gap-8 md:space-y-0">
        <h2 className="hero_title text-4xl font-bold">
          The Bright Future of Web 3.0?
        </h2>

        <div className="container_cta space-y-4 md:flex md:flex-col md:items-start md:justify-between">
          <p className="hero_description text-xs text-dark-grayish-blue md:w-10/12 md:text-base">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="hero_cta bg-soft-red px-8 py-4 font-semibold uppercase tracking-widest text-very-dark-blue hover:bg-very-dark-blue hover:text-off-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
