export default function Footer() {
  return (
    <div className="css-n7hb8q absolute bottom-100 w-[100%] mb-5 px-8 md:px-16 lg:px-20 pb-4">
      <div className="css-1p94y5j flex flex-row">
        <div>
          {/* <Image
            src="https://images.prismic.io/www-static%2F903fd83b-8963-42c2-baf6-44f4d6bb83f2_digitalocean-logo-mark.svg?auto=compress,format"
            alt="Digital Ocean logo"
            width={48}
            height={48}
          /> */}
          <p className="copyright text-sm md:text-base">
            © 2021 Mmuo, LLC. All rights reserved.
          </p>
        </div>

        <div>
          <ul className="css-mk78 flex space-x-5">
            <li>
              <a
                href="#"
                rel="nofollow"
                className="css-kgdro inline-block h-full transition-all duration-100"
              >
                {/* <Image
                  src="https://www-static.cdn.prismic.io/www-static/4c2ca1f4-35be-488b-93fb-9a7ef42a02f2_linkedin-social-icon.svg"
                  alt="Digital Ocean logo"
                  width={16}
                  height={16}
                /> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="nofollow"
                className="css-kgdro inline-block h-full transition-all duration-100"
              >
                {/* <Image
                  src="https://www-static.cdn.prismic.io/www-static/1f4c0b73-f446-4798-9888-69d16f788fff_dev-social-icon.svg"
                  alt="Digital Ocean logo"
                  width={16}
                  height={16}
                /> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="nofollow"
                className="css-kgdro inline-block h-full transition-all duration-100"
              >
                {/* <Image
                  src="https://www-static.cdn.prismic.io/www-static/8d2a15bd-f909-4f2c-b205-c5554342ec45_glassdoor-social-icon.svg"
                  alt="Digital Ocean logo"
                  width={16}
                  height={16}
                /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
