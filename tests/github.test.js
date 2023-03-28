import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Running github test', () => {
    test("check for github link", () => {

  const {container} = render(<Home />);

  // attempt to fetch the first child element within the "main" element
  const links = container.querySelectorAll('a');

  // ensure the the child element exists
  expect(links).toBeTruthy();

  // get all "a" elements within the child element

  // ensure there is at least 1 "a" element within the child

  // count the number of links that include "https://vercel.com"
  let gitHubLink = 0;

  links.forEach(link => {
    if(link.href.includes("https://github.com"))
      gitHubLink++;
  });

  // ensure that there is at least one link that includes "https://vercel.com"
  expect(gitHubLink).toBeGreaterThan(0); // at least one vercel link
});
})
