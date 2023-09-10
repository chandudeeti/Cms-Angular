export class GlobalConstants {
    // Message
    public static generateError: string = "Something went wrong. Please try again later";

    public static unauthroized:string = "You are not authorized person to access this page";

    public static productExistError:string = "Product already exists";

    public static productAdded:string = "Product added successfully";

    
  
    // Regular expressions (use RegExp instead of String)
    public static nameRegex: RegExp = /^[A-Za-z\s]+$/;
    public static emailRegex: RegExp = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
    public static contactNumberRegex: RegExp = /^[0-9]{10}$/;
  
    // Variable
    public static error: string = "error";
  }
  