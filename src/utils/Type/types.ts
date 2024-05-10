
export type Type = "customer" | "payment" | "account" | "discount" | "document" | "certification" | "uom" | "tax" | "marginSetting" | "vendor" | "department" | "role";

export interface CustomerMasterData {
  customerId?: string;
  customerName?: string;
  customerType?: string;
  accountType?: string;
  contactPerson?: string;
  email?: string;
  primaryNumber?: string;
  secondaryNumber?: string;
  country?: string;
  state?: string;
  district?: string;
  city?: string;
  zone?: string;
  address?: string;
  pincode?: string;
  purchaseResitriction?: string;
  discountType?: string;
  paymentTerms?: string;
  bussinessDocument?: string;
  fileUrls?: string[];
}

export interface UserData {
  username: string;
  phoneNumber: string;
  email: string;
  employeeId: string;
  password: string;
  department: string;
  role: string;
  company?:string;
  userPhoto?: string; 
}



 export interface ProfileMaster {
  fileUrls: string[];
  logo?: string;
  companyName?: string;
  businessType?: string;
  contactNumber?: string;
  country?: string;
  state?: string;
  district?: string;
  city?: string;
  zone?: string;
  address?: string;
  pincode?: string;
  aadharNumber?: string;
  panNumber?: string;
  regNumber?: string;
  gstinNumber?: string;
  bankAccNo?: string;
  accBranch?: string;
  ifscCode?: string;
  bussinessDocument?: string;
}

export interface VendorMasterData {
  vendorName?: string;
  vendorType?: string;
  contactPerson?: string;
  email?: string;
  primaryNumber?: string;
  secondaryNumber?: string;
  country?: string;
  state?: string;
  district?: string;
  city?: string;
  zone?: string;
  address?: string;
  pincode?: string;
  bankAccNo?: string;
  accountBranch?: string;
  ifscCode?: string;
  paymentTerms?: string;
  bussinessDocument?: string;
  fileUrls?: string[];
}
