import { NavigateFunction } from 'react-router-dom';

export const toSection = (section: HTMLElement) => {
  return section?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const scrollToSection = (
  id: string,
  locationPath: string,
  setTargetSection: (id: string) => void,
  navigate: NavigateFunction
) => {
  const section = document.getElementById(id);

  if (section) {
    toSection(section);
  } else {
    setTargetSection(id);
    if (locationPath !== '/') {
      navigate('/');
    }
  }
};
