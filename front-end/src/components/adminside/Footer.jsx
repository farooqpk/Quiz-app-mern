import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'


export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-3 bg-base-300 text-base-content fixed bottom-0  h-32">
        <div className="mt-3">
          <p className="font-semibold text-md">Copyright © 2023 - All right reserved</p>
        </div>

         <div className="flex mb-4 gap-4">
          
          <Link to={'https://github.com/farooqpk'}>
          <FontAwesomeIcon icon={faGithub}  className="text-2xl mx-2"  />
          </Link>

          <Link to={'https://www.linkedin.com/in/ummar-farooq-70865a220/'}>
          <FontAwesomeIcon icon={faLinkedin}   className="text-2xl  mx-2"   />
          </Link>
          
        </div>
      </footer>
    </>
  );
};
