import routes from "../constants/Routes";

type DetailsData = {
  [key: string]: string;
};

export type RootStackParamList = {
  [routes.HOME_SCREEN]: undefined;
  [routes.DETAILS_SCREEN]: { detailsData: DetailsData };
};

export type ApplicationStackParamList = {
  hookRoute: {
    navigate: (SCREEN: string, items?: object) => void;
    goBack: () => void;
    replace: (SCREEN: string) => void;
  };
  route: {
    params: {
      pin: "";
    };
  };
  [routes.HOME_SCREEN]: undefined;
  [routes.DETAILS_SCREEN]: undefined;

  navigate: () => void;
};
