import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactInfo = {
    address : Text;
    phone : Text;
    email : Text;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Nat, Inquiry>();

  var contactInfo : ContactInfo = {
    address = "123 Main Street, City, Country";
    phone = "+1 123 456 7890";
    email = "contact@company.com";
  };

  var nextInquiryId = 0;

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  public shared ({ caller }) func updateContactInfo(address : Text, phone : Text, email : Text) : async () {
    contactInfo := { address; phone; email };
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = { name; email; message };
    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
