import { SideNavItem, FollowNavMenu } from '@/components';
import * as S from './FollowNavItems.styles';
import defaultImage from '@/assets/avatar.svg';

type FollowNavItem = {
  username: string;
  link: string;
  imageUrl: string;
};

const followNavItems: FollowNavItem[] = [
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
  {
    username: '고양고양',
    link: '/asd',
    imageUrl: defaultImage,
  },
];

const FollowNavItems = () => {
  return (
    <S.FollowNavItems aria-label="Follower List Menu">
      <h3 className="nav-title">구독</h3>
      <ul>
        {followNavItems.map((navItem, index) => (
          <li key={`${index}-${navItem.username}`}>
            <SideNavItem link="asd">
              <FollowNavMenu
                username={navItem.username}
                imageUrl={navItem.imageUrl}
              />
            </SideNavItem>
          </li>
        ))}
      </ul>
    </S.FollowNavItems>
  );
};

export default FollowNavItems;
