import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import SettingsItem from "../components/SettingsItem";
import SectionHeader from "../components/SectionHeader";
import LanguageItem from "../components/Language/LanguageItem";
import ThemeItem from "../components/Theme/ThemeItem";
import Update from "../components/UpdateProfile/Update";
import Location from "../components/Location/Location";
import PaymentItem from "../components/Payment/PaymentItem";
import ReportProblemItem from "../components/Report/ReportProblemItem";
import ContactiUsItem from "../components/Conntection/ContactiUsItem";
import OpenTailorAcc from "../components/TailorAcc/OpenTailorAcc";
import SroreRequestItem from "../components/StoreAcc/SroreRequestItem";
import FeedBackItem from "../components/FeedBack/FeedbackItem";
import ShareAppItem from "../components/Share/ShareAppItem";
import LogOutItem from "../components/LogOut/LogOutItem";
import SettingListItem from "../components/SettingListItem";
import { preferencesData } from "../Data/settingsData";
import * as SettingsService from "../services/settings.service";
import HeadLine from "../../../Shared/ui/HeadLine";

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Um Sajda</Text>
      </View>

      <HeadLine>Preferences</HeadLine>
      <LanguageItem
        title="App language"
        subtitle="English"
        onPress={SettingsService.changeLanguage}
      />
      <ThemeItem
        title="Current theme"
        subtitle="Light / Dark"
        onPress={SettingsService.toggleTheme}
      />

      <HeadLine>Your account</HeadLine>

      <Update
        title="Update profile info"
        subtitle="Here you can customize your profile & information about you."
        onPress={() => navigation.navigate("EditProfile")}
      />

      <Location
        title="My addresses"
        subtitle="Manage your addresses and graphical locations."
        onPress={() => navigation.navigate("Addresses")}
      />

      <PaymentItem
        title="Payment methods"
        subtitle="Manage your cards and other digital payment methods."
        onPress={() => navigation.navigate("Payments")}
      />

      <HeadLine>Let’s get in touch</HeadLine>

      <ReportProblemItem
        title="Report a problem"
        subtitle="f you encounter difficulty using Fasally app, let us know!"
        onPress={() => navigation.navigate("ReportProblem")}
      />

      <ContactiUsItem
        title="Contact us"
        subtitle="You can find us on major social media platforms"
        onPress={() => navigation.navigate("ContactUs")}
      />

      <HeadLine>Be a partner</HeadLine>

      <OpenTailorAcc
        title="Open a tailor account"
        subtitle="If you have the skill you can start making money just now!"
        onPress={() => navigation.navigate("OpenTailor")}
      />

      <SroreRequestItem
        title="Request a store account"
        subtitle="Have a store? you can become a partner and sel on Fasally."
        onPress={() => navigation.navigate("StoreRequest")}
      />

      <HeadLine>We grow with you</HeadLine>
      <FeedBackItem
        title="Leave a feedback"
        subtitle="Your feedback helps us develop our services."
        onPress={() => navigation.navigate("Feedback")}
      />

      <ShareAppItem
        title="Share the app"
        subtitle="Don't keep it, let's bring others and make some noise."
        onPress={SettingsService.shareApp}
      />

      <LogOutItem
        title="logout"
        subtitle="Don't be gone too long, we'll miss you."
        onPress={() => SettingsService.logout(navigation)}
      />

      {/** 
      {preferencesData.map((item) => (
        <SettingListItem
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          onPress={() => console.log(item.title)}
        />
      ))}*/}
    </ScrollView>
  );
}
