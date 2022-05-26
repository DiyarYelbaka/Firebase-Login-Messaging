export default function(errorCode){
    switch (errorCode) {
     
         case 'auth/invalid-email':
            return "Geçersiz e-posta adresi"

        case 'auth/email-already-exists':
            return "Kullanıcı Zaten kayıtlı"   
            
        case 'auth/user-not-found':
            return "Kullanıcı Bulunamadı"   

        case 'auth/weak-password':
            return "Parola çok zayıf"   

        case 'auth/wrong-password':
                return "Parola Geçersiz"

         case 'auth/email-already-in-use':
              return "Kullanıcı Zaten kayıtlı"   
        
    
        default:
            return errorCode;
    }
}