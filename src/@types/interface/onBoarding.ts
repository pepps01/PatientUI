export type OnBoardingDataType = {
  id: string;
  title: string;
  description: string;
};

export interface OnBoardingItemsProps {
  item: OnBoardingDataType;
}

export interface PaginationSceneProps {
  item: OnBoardingDataType[];
  scrollX: any;
}

export interface NextSVGButtonProps {
  percentage: number;
  scrollTo: any;
}
