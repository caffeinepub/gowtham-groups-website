import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInfo {
    email: string;
    address: string;
    phone: string;
}
export interface Inquiry {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getContactInfo(): Promise<ContactInfo>;
    getInquiry(id: bigint): Promise<Inquiry>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
    updateContactInfo(address: string, phone: string, email: string): Promise<void>;
}
