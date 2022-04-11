// Dashboard Stack
import Dashboard from './dashboard';

// Book Appointment Services & Stacks
import ListDoctors from './services/bookAppointments/doctorsProfileList';
import DoctorsProfile from './services/bookAppointments/singleDoctorProfile/';
import ConsultDoctor from './services/bookAppointments/confirmBookingConsult';
import BookAppointmentPayment from './services/bookAppointments/appointmentPayment';
import AppointmentBookings from './services/bookAppointments/bookings';

// Book Ambulance Services & Stacks
import BookAmbulanceHome from './services/bookAmbulance/booking';
import AmbulanceNearbyListing from './services/bookAmbulance/ambulanceNearbyList';
import ConfirmAmbulanceBooking from './services/bookAmbulance/confirmBooking';
import AmbulanceRequest from './services/bookAmbulance/requestAmbulance';
import AmbulanceDestinationRequest from './services/bookAmbulance/destination';

// Scan Product service & Stacks service
import ScanPreview from './services/scanProducts/scanPreview';

// Purchase Medication & Stacks services
import ProductListing from './services/purchaseMedication/productListing';
import SingleProduct from './services/purchaseMedication/singleProduct';
import MedicationPaymentConfirmation from './services/purchaseMedication/paymentConfirmation';

// User Profile Screen
import UserProfile from './userProfile';

// Wallet, Orders, and Cart
import Wallet from './wallet';
import Orders from './orders';
import Cart from './cart';

// Export All RigourMain screens here
export {
  Dashboard,
  UserProfile,
  ListDoctors,
  DoctorsProfile,
  ConsultDoctor,
  BookAppointmentPayment,
  AppointmentBookings,
  BookAmbulanceHome,
  AmbulanceNearbyListing,
  ConfirmAmbulanceBooking,
  AmbulanceRequest,
  AmbulanceDestinationRequest,
  ScanPreview,
  ProductListing,
  SingleProduct,
  MedicationPaymentConfirmation,
  Wallet,
  Orders,
  Cart,
};
