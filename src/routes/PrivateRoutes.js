import React from 'react';
import { Switch } from 'react-router-dom';
import All from '../pages/bidboard/All';
import BidDetails from '../pages/bidboard/BidDetails'
import BidContract from '../pages/bidboard/BidContract';
import Dashboard from '../pages/dashboard/Index';
import BidDelivery from '../pages/bidboard/BidDelivery'
import Contract from '../pages/Contract/Contract';
import ContractDetails from '../pages/Contract/ContractDetails';
// import BidBoard from '../pages/Contract/BidBoard';
import ContractVendor from '../pages/Contract/ContractVendor';
import Company from '../pages/Profile/CompanyDetails';
import CompanyProfile from '../pages/Profile/CompanyProfile';
import Index from '../pages/Profile/ProfileIndex';
import TeamMember from '../pages/Profile/TeamMember';
import RFQ from '../pages/rfq/Index';
import AuthRoute from './AuthRoutes';
import TeamList from '../pages/TeamMemberList/TeamList'
import Support from '../pages/Support/Support'
import RfqQuote from '../pages/rfq/RfqQuote';
import RfqList from '../pages/rfq/RfqList';
import RfqBody from '../pages/rfq/RfqBody';
import CallModal from '../pages/rfq/CallModal';
import QuoteSingle from '../pages/rfq/QuoteSingle';
import QuoteSingle2 from '../pages/rfq/RfqModals/QuoteSingle2';
import BindingContract from '../pages/rfq/BindingContract';
import ProfilePage from './../pages/Profile/ProfilePage';
import VendorPage from '../pages/vendor/VendorPage';
import DeliveryRating from '../pages/rfq/DeliveryRating';
import { default as VendorDashboard } from '../pages/VendorModule/dashboard'
import VendorProfile from '../pages/rfq/VendorProfile';
import Messages from '../pages/Messages/messages';
import ProfileCompany from '../pages/Profile/ProfileCompany';
import ProfileDetails from '../pages/Profile/ProfileDetails';
import { ProfileTeam } from '../pages/Profile/ProfileTeam';
import SignUp from '../pages/auth/SignUp';
import IndividualSignup from '../pages/auth/IndividualSignup';
import CoporateSignup from './../pages/auth/CoporateSignup';
import Notify from '../pages/auth/Notify';
import Login from '../pages/auth/Login';
import Recovery from '../pages/auth/Recovery';
import Recovery2 from '../pages/auth/Recovery2';
import AuthVendor from '../pages/auth/vendor'

export default function PrivateRoutes() {
  return (
    <Switch>
      
      <AuthRoute exact path="/dashboard">
        <VendorDashboard />
      </AuthRoute>

      <AuthRoute exact path="/rfq">
        <RFQ />
      </AuthRoute>
      <AuthRoute exact path="/rfq/list">
        <RfqList />
      </AuthRoute>
      <AuthRoute exact path="/rfq/:id/list">
        <RfqList />
      </AuthRoute>
      <AuthRoute exact path="/rfq/:id/request/:request_id">
        <RfqBody />
      </AuthRoute>
      <AuthRoute exact path="/bid-board">
        <All />
      </AuthRoute>
      <AuthRoute exact path="/bid-board/details">
        <BidDetails />
      </AuthRoute>
      <AuthRoute exact path="/bid-board/delivery">
        <BidDelivery />
      </AuthRoute>
      <AuthRoute exact path="/bid-board/contract">
        <BidContract />
      </AuthRoute>

      <AuthRoute exact path="/rfq/request">
        <RfqBody />
      </AuthRoute>
      <AuthRoute exact path="/rfq/vendorprofile">
        <VendorProfile />
      </AuthRoute>
      <AuthRoute exact path="/rfq/deliveryrating">
        <DeliveryRating />
      </AuthRoute>

      <AuthRoute exact path="/rfq/request2">
        <QuoteSingle2 />
      </AuthRoute>

      <AuthRoute exact path="/rfq/request/binding-contract">
        <BindingContract />
      </AuthRoute>

      <AuthRoute exact path="/callmodal">
        <CallModal />
      </AuthRoute>

      <AuthRoute exact path="/profile/coorporate">
        <ProfileCompany />
      </AuthRoute>

      <AuthRoute exact path="/profile/individual">
        <ProfilePage />
      </AuthRoute>

      <AuthRoute exact path="/profile/details">
        <ProfileDetails/>
      </AuthRoute>

      <AuthRoute exact path="/profile/team">
        <ProfileTeam/>
      </AuthRoute>

      <AuthRoute exact path="/team_members">
        <TeamList />
      </AuthRoute>
      <AuthRoute exact path="/support">
        <Support />
      </AuthRoute>
      <AuthRoute exact path="/contracts">
        <Contract />
      </AuthRoute>
      <AuthRoute exact path="/contracts/details">
        <ContractDetails />
      </AuthRoute>
      <AuthRoute exact path="/contracts/vendor">
        <ContractVendor />
      </AuthRoute>
      <AuthRoute exact path="/vendor/profile">
        <VendorPage />
      </AuthRoute>
      <AuthRoute exact path="/vendor/dashboard">
        <VendorDashboard />
      </AuthRoute>
      <AuthRoute exact path="/messages">
        <Messages />
      </AuthRoute>
    </Switch>
  );
}
