import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Running github test', () => {
    test('Checking for atleast one github link on home component', () => {
        const {container} = render(<Home />);
        const links = child.querySelectorAll("a");
        expect(links).toBeTruthy();

        links.forEach(link => {
            if(link.href.includes("https://github.com"))
              gitHubLink++;
          });
          expect(gitHubLink).toBeGreaterThan(0);
      });
  });