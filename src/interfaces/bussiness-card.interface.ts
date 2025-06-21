export interface ISocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

export interface IBusinessCardData {
  name: string;
  position: string;
  org: string;
  email: string;
  logo: string;
  phones: string[];
  address: string;
  bgColor: string;
  bgLogo: string;
  textColor: string;
  cardColor: string;
  buttonColor: string;
  enableContactButton: boolean;
  enableSocialLinks: boolean;
  socialLinks: ISocialLinks;
}
