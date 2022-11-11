import {
  ImageSkeleton,
  SkeletonContainer,
  TextSkeleton,
} from './user-card-skeleton.styles';

const UserCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <ImageSkeleton variant="circular" />
      <TextSkeleton variant="rectangular" />
      <TextSkeleton variant="rectangular" mini="yes" />
    </SkeletonContainer>
  );
};

export default UserCardSkeleton;
