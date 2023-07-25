"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2595],{4650:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return x}});var n=a(87462),i=a(63366),d=(a(15007),a(64983)),r=a(91515),o=a(90703),m=["components"],l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}},s=p("InlineAlert"),g=p("TabsBlock"),c={_frontmatter:l},u=r.Z;function x(e){var t=e.components,a=(0,i.Z)(e,m);return(0,d.mdx)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-campaign-standard"},"Adobe Campaign Standard"),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Before")," you install or configure the Campaign Standard extension, please read the ",(0,d.mdx)("a",{parentName:"p",href:"../getting-started/create-a-mobile-property.md"},"getting started guide")," and the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-channels/configuring-a-mobile-application.html"},"configuring a mobile application using Adobe Experience Platform SDKs guide"),"."),(0,d.mdx)("h2",{id:"configure-the-campaign-standard-extension-in-the-data-collection-ui"},"Configure the Campaign Standard extension in the Data Collection UI"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"In the Data Collection UI, select the ",(0,d.mdx)("strong",{parentName:"li"},"Extensions")," tab."),(0,d.mdx)("li",{parentName:"ol"},"On the ",(0,d.mdx)("strong",{parentName:"li"},"Catalog")," tab, locate the ",(0,d.mdx)("strong",{parentName:"li"},"Adobe Campaign Standard")," extension, and select ",(0,d.mdx)("strong",{parentName:"li"},"Install"),"."),(0,d.mdx)("li",{parentName:"ol"},"Provide the extension settings."),(0,d.mdx)("li",{parentName:"ol"},"Select ",(0,d.mdx)("strong",{parentName:"li"},"Save"),"."),(0,d.mdx)("li",{parentName:"ol"},"Follow the publishing process to update SDK configuration.")),(0,d.mdx)("h3",{id:"configure-the-campaign-standard-extension"},"Configure the Campaign Standard extension"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"108.74999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/5530d/configure.webp 320w","/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/0c8fb/configure.webp 640w","/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/80c60/configure.webp 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/dd4a7/configure.png 320w","/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/0f09e/configure.png 640w","/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/1263b/configure.png 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/49b4b9bad3b04b4dcd4187a30c87ba53/1263b/configure.png",alt:"configure",title:"configure",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h3",{id:"campaign-standard-endpoints"},"Campaign Standard endpoints"),(0,d.mdx)("p",null,"Provide endpoint URL(s) for your Campaign Standard instances. You can specify up to three unique endpoints for your development, staging, and production environments. In most cases, the server endpoint is the root URL address, such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"companyname.campaign.adobe.com"),"."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"For this extension, these endpoint URLs ",(0,d.mdx)("strong",{parentName:"p"},"do not")," contain the ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"https://")," and ",(0,d.mdx)("strong",{parentName:"p"},"cannot")," end with a forward slash."),(0,d.mdx)("h4",{id:"pkey"},"pKey"),(0,d.mdx)("p",null,"A unique, automatically generated identifier for a mobile app that was configured in Adobe Campaign Standard. After you configure this extension in the Data Collection UI, configure your mobile property in Campaign Standard. For more information, please read the tutorial on ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-channels/configuring-a-mobile-application.html"},"configuring a mobile application in Adobe Campaign"),"."),(0,d.mdx)("p",null,"After the configuration is successful in Campaign, the pKey is automatically generated and configured in the Campaign extension for a successful validation."),(0,d.mdx)("h4",{id:"mcias-region"},"MCIAS region"),(0,d.mdx)("p",null,"Select an MCIAS region based on your customer's location or enter a custom endpoint. The SDK retrieves all in-app messaging rules and definition payloads from this endpoint."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"For this extension, the custom MCIAS endpoint URL ",(0,d.mdx)("strong",{parentName:"p"},"do not")," contain the ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"https://")," and ",(0,d.mdx)("strong",{parentName:"p"},"cannot")," end with a forward slash."),(0,d.mdx)("h4",{id:"request-timeout"},"Request timeout"),(0,d.mdx)("p",null,"The request timeout is the time in seconds to wait for a response from the in-app messaging service before timing out. The default timeout value is 5 seconds, and the minimum timeout value is 1 second."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The request timeout value must be a non-zero number."),(0,d.mdx)("h3",{id:"add-the-campaign-standard-extension-to-your-app"},"Add the Campaign Standard extension to your app"),(0,d.mdx)("p",null,"Remember the following information when you add the Campaign extension to your app:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Extension"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Information"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Campaign Standard"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The Campaign Standard extension requires the ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/index.md"},"Mobile Core"),", ",(0,d.mdx)("a",{parentName:"td",href:"../profile/index.md"},"Profile"),", ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/lifecycle/index.md"},"Lifecycle"),", and ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/signal/index.md"},"Signal")," extensions. You should always ensure that you get the latest version of the extensions.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Profile"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The Profile extension is required for in-app trigger frequencies to work accurately. For more information, see ",(0,d.mdx)("a",{parentName:"td",href:"../profile/index.md"},"Profile"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Signal"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The Signal extension is required for all postback rules to work. For more information, see ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/signal/index.md"},"Signal"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Lifecycle"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The Lifecycle extension is required for a profile to be registered in Campaign. In order to do this, you will need to implement the Lifecycle APIs. For more information, please read either the ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/lifecycle/android.md"},"Lifecycle API (Android)")," or the ",(0,d.mdx)("a",{parentName:"td",href:"../mobile-core/lifecycle/ios.md"},"Lifecycle API (iOS)")," documentation.")))),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The instructions to add these extensions to your mobile app are also available in the Data Collection UI. To access the installation dialog box, open your mobile property, select the ",(0,d.mdx)("strong",{parentName:"p"},"Environments")," tab, followed by ",(0,d.mdx)("strong",{parentName:"p"},"Install"),"."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=add",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=add",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"register-the-campaign-standard-extension-with-mobile-core"},"Register the Campaign Standard extension with Mobile Core"),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=register",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"initialize-the-sdk-and-set-up-tracking"},"Initialize the SDK and set up tracking"),(0,d.mdx)("p",null,"To initialize the SDK and set up tracking, see the ",(0,d.mdx)("a",{parentName:"p",href:"../getting-started/track-events.md"},"initialize the SDK and set up tracking tutorial"),"."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=initialize",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=initialize",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"set-up-push-messaging"},"Set up push messaging"),(0,d.mdx)("p",null,"To enable push messaging with Adobe Campaign, call ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPushIdentifer")," to send the push identifier that is received from the Apple Push Notification Service (APNS) or Firebase Cloud Messaging Platform (FCM) to the Adobe Identity service. For more information about the ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPushIdentifer")," API, see the ",(0,d.mdx)("a",{parentName:"p",href:"../mobile-core/identity/api-reference.md#setpushidentifier"},"setPushIdentifier section of the Adobe Identity API guide"),"."),(0,d.mdx)("p",null,"For more information about setting up your iOS app to connect to APNS and retrieve a device token that will be used as a push identifier, see the tutorial on ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns?language=objc"},"registering your app with APNs"),". For more information about setting up your Android app to connect to FCM and retrieve a device registration token that will be used as a push identifier, see the tutorial on ",(0,d.mdx)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"setting up a Firebase Cloud Messaging client app on Android"),"."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"To learn more about creating a push notification using Adobe Campaign, see the tutorial on ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/communication-channels/push-notifications/preparing-and-sending-a-push-notification.html"},"preparing and sending a push notification"),"."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=push-messaging",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=push-messaging",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"tracking-local-and-push-notification-message-interactions"},"Tracking local and push notification message interactions"),(0,d.mdx)("p",null,"User interactions with local or push notifications can be tracked by invoking the ",(0,d.mdx)("inlineCode",{parentName:"p"},"collectMessageInfo")," API. After the API is invoked, a network request is made to Campaign that contains the message interaction event."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The code samples below are provided as examples on how to correctly invoke the ",(0,d.mdx)("inlineCode",{parentName:"p"},"collectMessageInfo")," API. For more specific details, please read the tutorials on ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-mobile/local-tracking.html"},"implementing local notification tracking")," and ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-mobile/push-tracking.html"},"configuring push tracking")," within the Adobe Campaign documentation."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=track",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=track",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"deleting-mobile-properties-in-the-data-collection-ui"},"Deleting mobile properties in the Data Collection UI"),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Deleting your property in the Experience Platform Data Connection UI might cause disruption to your recurring push and in-app messaging activities."),(0,d.mdx)("p",null,"In the Data Collection UI, if you delete your mobile property, review your mobile property status in the Campaign Standard extension and ensure that the property displays an updated ",(0,d.mdx)("strong",{parentName:"p"},"Deleted in Launch")," status. For more information about deleting a property, please read the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/tags/admin/companies-and-properties.html#delete-a-property"},"delete a property")," section within the Data Collection UI documentation."),(0,d.mdx)("p",null,"To remove the corresponding mobile app in Campaign Standard, select ",(0,d.mdx)("strong",{parentName:"p"},"Remove from ACS"),". For more information, see the section on ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-channels/configuring-a-mobile-application.html#delete-app"},"deleting your tags-enabled mobile application"),"."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Deleting your mobile property in the Data Collection UI does not automatically delete your Campaign Standard mobile app."),(0,d.mdx)("h3",{id:"handling-clickthrough-destinations-included-in-campaign-in-app-messages"},"Handling clickthrough destinations included in Campaign in-app messages"),(0,d.mdx)("p",null,"A destination URL can be added to in-app messages that are delivered from Adobe Campaign. The destination can be a website URL such as ",(0,d.mdx)("a",{parentName:"p",href:"https://www.adobe.com"},"https://www.adobe.com")," or a deep link such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"campaigndemoapp://signupactivity?paidaccount=true")," which can be used to direct the user to a specific area of your app."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The Android Core's ",(0,d.mdx)("inlineCode",{parentName:"p"},"UIService")," provides a new API  ",(0,d.mdx)("inlineCode",{parentName:"p"},"setURIHandler")," for safer loading of in-app  ",(0,d.mdx)("inlineCode",{parentName:"p"},"URIs"),". More information regarding the Android security vulnerability can be seen at the Google support article ",(0,d.mdx)("a",{parentName:"p",href:"https://support.google.com/faqs/answer/9267555?hl=en"},"Remediation for Intent Redirection Vulnerability"),". The following Android example has been updated to use these newly added API."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=handling",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=handling",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"customizing-the-frequency-of-registration-requests-sent-to-campaign"},"Customizing the frequency of registration requests sent to Campaign"),(0,d.mdx)("p",null,"The frequency of registration requests sent to Campaign are reduced starting with Campaign Standard Android extension version 1.0.7 and iOS extension version 1.0.6. The default registration delay is seven days since the last successful registration. This registration delay can be configured to provide more flexibility on when to send a registration request."),(0,d.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The configuration setting to pause registration requests is provided for specific use cases only. The use of this configuration setting should be ",(0,d.mdx)("strong",{parentName:"p"},"avoided")," when possible."),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=customize",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=customize",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Giving a value of ",(0,d.mdx)("inlineCode",{parentName:"p"},"0")," when setting ",(0,d.mdx)("inlineCode",{parentName:"p"},"campaign.registrationDelay")," will send a registration request on every launch event. This is the previous behavior seen before the registration request reduction enhancement was added."),(0,d.mdx)("h3",{id:"using-a-bundled-image-asset-within-a-full-page-large-modal-or-small-modal-in-app-message"},"Using a bundled image asset within a full page, large modal, or small modal in-app message"),(0,d.mdx)("p",null,"A bundled image asset may be specified on the Campaign Standard UI to be used as a primary image or as a fallback image in the case where a specified remote image URL is inaccessible. The bundled image should be specified on the Campaign Standard UI with the file name and file extension. For example, in the  ",(0,d.mdx)("inlineCode",{parentName:"p"},"Bundled Image")," text entry field on the Campaign Standard UI, a JPEG file with the file name ",(0,d.mdx)("inlineCode",{parentName:"p"},"example")," can be provided in the following format:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-text"},"example.jpg\n")),(0,d.mdx)("p",null,"The specified bundled image must then be included with your app when it is built. To do so:"),(0,d.mdx)(g,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(o.default,{query:"platform=android&task=bundled-image",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(o.default,{query:"platform=ios&task=bundled-image",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"configuration-keys"},"Configuration keys"),(0,d.mdx)("p",null,"To update SDK configuration programmatically, use the following information to change your Campaign Standard configuration values. For more information, see the ",(0,d.mdx)("a",{parentName:"p",href:"../mobile-core/configuration/api-reference.md"},"Configuration API reference"),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Required"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Data Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.timeout")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the amount of time to wait for a response from the in-app messaging service."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Integer")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.mcias")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the in-app messaging service URL endpoint."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.server")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the endpoint URL for the production environment in the Adobe Campaign Standard instance."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.pkey")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the identifier for a mobile app that was configured in the production environment in the Adobe Campaign Standard."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"build.environment")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specifies which environment to use (prod, dev, or staging) when sending registration information."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"__dev__campaign.pkey")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the identifier for a mobile app that was configured in the development environment in Adobe Campaign Standard."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"__dev__campaign.server")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the endpoint URL for the development environment in the Adobe Campaign Standard instance."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"__stage__campaign.pkey")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the identifier for a mobile app that was configured in the staging environment in Adobe Campaign Standard."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"__stage__campaign.server")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the endpoint URL for the staging environment in the Adobe Campaign Standard instance."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.registrationDelay")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the number of days to delay the sending of the next Adobe Campaign Standard registration request."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Integer")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"campaign.registrationPaused")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Sets the Adobe Campaign Standard registration request paused status."),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Boolean")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-campaign-standard-index-md-c9fc29349939700f2c60.js.map