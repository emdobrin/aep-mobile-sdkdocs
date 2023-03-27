# Frequently asked questions

## Does the Edge Network extension support offline tracking?

Yes, offline tracking is supported by default when sending XDM Experience events since these events have a required timestamp, and there is no separate setting for this as it used to be in the Adobe Analytics extension. The events are backed up in the persistence layer and then sent to the Edge Network in current session if possible, or queued until the next session when a network connection is available.

## How to resolve "One or more AEP Mobile Track events are missing an AEP Edge Hit event" displayed in Assurance?

This error usually indicates that the required settings are not met for your Edge Network implementation, or that the hit was not delivered to the Edge Network yet. To resolve this error, check out the settings below:

1. Check that the Edge Network and required dependencies are install correctly:
   In Data Collection UI in your mobile property (tag) verify the following extensions are installed:
   * Mobile Core
   * Adobe Experience Platform Edge Network
   * Identity

   In the client-side mobile app, check that the dependencies are installed and the extensions are registered.
   To verify this, you can search for the following in the Extension Versions view in Assurance: Mobile Core, Edge, Edge Identity
   If you don't see one or some of then, see the instructions for [adding Edge Network extensions to your app](https://developer.adobe.com/client-sdks/documentation/edge-network/#add-the-edge-network-extension-to-your-app).


2. Check that the Edge Network extension has all the required configuration settings, such as a Datastream ID:
   Follow the steps for [configuring the Edge Network Extension in Data Collection UI](https://developer.adobe.com/client-sdks/documentation/edge-network/), then [publish the changes](../getting-started/create-a-mobile-property.md#publish-the-configuration) to the environment used for testing.

3. Does your application use the Consent for Edge Network extension?

   Search for the following in the Extension Versions view in Assurance: Consent
   If using Consent extension, check the steps for [configuring the Adobe Experience Platform Consent extension in Data Collection UI](../consent-for-edge-network/index.md), then [publish the changes](../getting-started/create-a-mobile-property.md#publish-the-configuration) to the environment used for testing.

4. Does you Assurance session contain events that pass the validation, but some of the events started showing this error again?
   If you are using the Consent extension, are you seeing this behavior after you navigated through the app settings view and changed the current collect consent preferences for the test user?
   If the collect consent settings were changed to No ("n") this is expected behavior and the hits are not sent until the preferences are updated. For more details about this, see [update and get collect consent preferences](https://developer.adobe.com/client-sdks/documentation/privacy-and-gdpr/#update-and-get-collect-consent-preferences).
