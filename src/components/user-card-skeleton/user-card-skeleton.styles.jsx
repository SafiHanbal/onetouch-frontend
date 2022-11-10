import { styled, Box, Skeleton } from '@mui/material';

export const SkeletonContainer = styled(Box)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: repeat(2, 20px);
  grid-gap: 10px;

  padding: 10px 15px 9px;
  border-bottom: 1px solid var(--color-primary);
`;

export const ImageSkeleton = styled(Skeleton)`
  height: 50px;
  width: 50px;
  grid-row: 1 / -1;
`;

export const TextSkeleton = styled(Skeleton)`
  grid-column: 2/3;
  width: ${({ mini }) => (mini ? '80%' : '100%')};
  height: 90%;
`;
