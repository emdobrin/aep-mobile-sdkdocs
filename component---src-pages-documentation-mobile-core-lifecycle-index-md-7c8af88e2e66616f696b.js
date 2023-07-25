"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7179,5471],{37638:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return h}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),l=a(91515),d=a(15156),o=["components"],m={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},s=p("TabsBlock"),c=p("InlineAlert"),x={_frontmatter:m},u=l.Z;function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(u,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"lifecycle"},"Lifecycle"),(0,r.mdx)("p",null,"Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"LifecycleStart")," API. Session data is persisted, so it is available across application launches."),(0,r.mdx)("h2",{id:"add-lifecycle-to-your-app"},"Add Lifecycle to your app"),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&task=add",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&task=add",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"register-lifecycle-with-mobile-core-and-add-appropriate-startpause-calls"},"Register Lifecycle with Mobile Core and add appropriate Start/Pause calls"),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&task=register",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"lifecycle-metrics"},"Lifecycle metrics"),(0,r.mdx)("p",null,"The following is a complete list of all of the metrics provided on your user's app lifecycle."),(0,r.mdx)("h3",{id:"application-context"},"Application Context"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"App ID"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.AppID")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the application name and version in the following format: ",(0,r.mdx)("inlineCode",{parentName:"td"},"AppName BundleVersion (app version code)"),". An example of this format is ",(0,r.mdx)("inlineCode",{parentName:"td"},"MyAppName 1.1(1)"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Device name"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DeviceName")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the device name.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Operating system version"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.OSVersion")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the operating system name and version.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Carrier name"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.carrierName")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the name of the mobile service provider as provided by the device. ",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," This metric is ",(0,r.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics variable. You must create a processing rule to copy this value to an Analytics variable for reporting.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Resolution"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.Resolution")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The width x height in pixels.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Locale"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.Locale")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The locale set for this device. For example, this value can be ",(0,r.mdx)("inlineCode",{parentName:"td"},"en-US"),".")))),(0,r.mdx)("h3",{id:"install"},"Install"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"First Launches"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.InstallEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered at the first run after installation or re-installation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Install Date"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.InstallDate")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Date of first launch after installation. The format is ",(0,r.mdx)("inlineCode",{parentName:"td"},"M/d/yyyy"),", and an example is ",(0,r.mdx)("inlineCode",{parentName:"td"},"5/3/2017"),".")))),(0,r.mdx)("h3",{id:"upgrade"},"Upgrade"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Upgrades"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.UpgradeEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered at the first run after upgrade or when the version number changes.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Launches since last upgrade"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.LaunchesSinceUpgrade")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of days since the application version number changed.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Days since last upgrade"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUpgrade")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of launches since the application version number changed.")))),(0,r.mdx)("h3",{id:"launch"},"Launch"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Daily Engaged Users"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DailyEngUserEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application is used on a particular day. Important: This metric is not automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Monthly Engaged Users"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.MonthlyEngUserEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application is used during a particular month. Important: This metric is not automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Launches"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.LaunchEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered on every run, including crashes and installs. Also triggered when the app is resumed from the background after the lifecycle session timeout is exceeded.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Previous Session Length"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.PrevSessionLength")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Reports the number of seconds that a previous application session lasted based on how long the application was open and in the foreground.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Ignored Session Length"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.ignoredSessionLength")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"If the last session is set to last longer than ",(0,r.mdx)("inlineCode",{parentName:"td"},"lifecycle.sessionTimeout"),", that session length is ignored and recorded here.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Launch Number"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.Launches")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of times the application was launched or brought out of the background.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Days since first use"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceFirstUse")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of days since first run.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Days since last use"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUse")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of days since last use.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Hour of Day"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.HourOfDay")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Measures the hour the app was launched and uses the 24-hour numerical format. Used for time parting to determine peak usage times.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Day of Week"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DayOfWeek")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Measures the day of the week the app was launched.")))),(0,r.mdx)("h3",{id:"crash"},"Crash"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Crashes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.CrashEvent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application crashed before closing. The event is sent when the application is started again after the crash.")))),(0,r.mdx)("h3",{id:"device-information"},"Device information"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"App ID"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.AppId")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the application name and version in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"AppName BundleVersion (app version code)")," format. ",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," An example of this format is ",(0,r.mdx)("inlineCode",{parentName:"td"},"MyAppName 1.1(1)"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Device name"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.DeviceName")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the device name.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Operating system version"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.OSVersion")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the operating system name and version.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Carrier name"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.CarrierName")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Stores the name of the mobile service provider as provided by the devices.",(0,r.mdx)("br",null),(0,r.mdx)("br",null),"This metric is ",(0,r.mdx)("strong",{parentName:"td"},"not")," automatically saved in an Analytics variable. For reporting, you must create a processing rule to copy this value to an Analytics variable.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Resolution"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.Resolution")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The width x height in pixels.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Locale"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"a.Locale")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The locale set for this device. For example, this can be ",(0,r.mdx)("inlineCode",{parentName:"td"},"en-US"),".")))),(0,r.mdx)("p",null,"If you need to programmatically update your SDK configuration, use the following information to change your Lifecycle configuration values:"),(0,r.mdx)(c,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The time that your app spends in the background is not included in the session length."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"lifecycle.sessionTimeout")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Time, in seconds, that must elapse between the time the app is launched and before the launch is considered to be a new session. This timeout also applies when your application is sent to the background and reactivated.",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," The default value is 300 seconds (5 minutes).")))))}h.isMDXComponent=!0},15156:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),l=a(91515),d=["components"],o={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},p=m("Variant"),s=m("InlineNestedAlert"),c={_frontmatter:o},x=l.Z;function u(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.mdx)(x,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(p,{platform:"android",task:"add",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("p",null,"Add the Lifecycle extension and its dependency, the ",(0,r.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension to your project using the app's Gradle file."),(0,r.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,r.mdx)("p",null,"Using dynamic dependency versions is ",(0,r.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:lifecycle'\n")),(0,r.mdx)("p",null,"Import the Lifecycle and MobileCore extensions in your application's main activity."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Lifecycle;\n")),(0,r.mdx)(p,{platform:"ios",task:"add",repeat:"8",mdxType:"Variant"}),(0,r.mdx)("p",null,"Add the AEPLifecycle extension and its dependency, the ",(0,r.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension, to your project using Cocoapods."),(0,r.mdx)("p",null,"Add the following pods in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore','~>3.0'\npod 'AEPLifecycle','~>3.0'\n")),(0,r.mdx)("p",null,"Import the Lifecycle library:"),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPLifecycle\n")),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPLifecycle;\n")),(0,r.mdx)(p,{platform:"android",task:"register",repeat:"9",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobileApp extends Application {\n@Override\npublic void onCreate() {\nsuper.onCreate();\n     MobileCore.setApplication(this);\n     List<Class<? extends Extension>> extensions = Arrays.asList(Lifecycle.EXTENSION, ...);\n     MobileCore.registerExtensions(extensions, o -> {\n        // Any other post registration processing\n    });\n  }\n}\n\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"In the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onResume")," function, start the lifecycle data collection:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"    @Override  \n    public void onResume() {  \n        MobileCore.setApplication(getApplication());\n        MobileCore.lifecycleStart(null);\n    }\n")),(0,r.mdx)("p",null,"Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call ",(0,r.mdx)("inlineCode",{parentName:"p"},"setApplication"),"in each of your activities."),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},"In the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onPause")," function, pause the lifecycle data collection:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void onPause() {\n        MobileCore.lifecyclePause();\n    }\n")),(0,r.mdx)("p",null,"To ensure accurate session and crash reporting, this call must be added to every activity."),(0,r.mdx)(p,{platform:"ios",task:"register",repeat:"32",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension with the SDK Core by adding the following to your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method. This will register the extension with Core and begin Lifecycle event processing:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Lifecycle.self, ...], {\n        ...\n    }\n}\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Start Lifecycle data collection by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:")," from within the callback of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.registerExtensions")," method in your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method.")),(0,r.mdx)("p",null,"If your iOS application supports background capabilities, your ",(0,r.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,r.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,r.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n    let appState = application.applicationState            \n    MobileCore.registerExtensions([Lifecycle.self, ...], {\n        if appState != .background {\n        // only start lifecycle if the application is not in the background\n        MobileCore.lifecycleStart(additionalContextData: nil)\n        }\n    }\n}\n")),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},"When launched, if your app is resuming from a backgrounded state, iOS might call your ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationWillEnterForeground(_ application: UIApplication) {    \n    MobileCore.lifecycleStart(additionalContextData: nil)\n}\n")),(0,r.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,r.mdx)("inlineCode",{parentName:"p"},"sceneWillEnterForeground")," method as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func sceneWillEnterForeground(_ scene: UIScene) {\n    MobileCore.lifecycleStart(additionalContextData: nil)\n}\n")),(0,r.mdx)("p",null,"For more information on handling foregrounding applications with Scenes, refer to Apple's documentation ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground"},"here")),(0,r.mdx)("ol",{start:4},(0,r.mdx)("li",{parentName:"ol"},"When the app enters the background, pause Lifecycle data collection from your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationDidEnterBackground:")," delegate method:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationDidEnterBackground(_ application: UIApplication) {    \n    MobileCore.lifecyclePause()\n}\n")),(0,r.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,r.mdx)("inlineCode",{parentName:"p"},"sceneDidEnterBackground")," method as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func sceneDidEnterBackground(_ scene: UIScene) {\n    MobileCore.lifecyclePause()\n}\n")),(0,r.mdx)("p",null,"For more information on handling backgrounding applications with Scenes, refer to Apple's documentation ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background"},"here")),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension with the SDK Core by adding the following to your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method. This will register the extension with Core and begin Lifecycle event processing:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // register the lifecycle extension\n[AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{\n    ...\n}];\nreturn YES;\n}\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Start Lifecycle data collection by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:")," from within the callback of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"AEPMobileCore::registerExtensions:")," method in your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method.")),(0,r.mdx)("p",null,"If your iOS application supports background capabilities, your ",(0,r.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,r.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,r.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // register the lifecycle extension, and begin event processing with Core\n    const UIApplicationState appState = application.applicationState;\n    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{\n    // only start lifecycle if the application is not in the background\n    if (appState != UIApplicationStateBackground) {\n        [AEPMobileCore lifecycleStart:nil];\n    }\n    }];\n}\n")),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},"When launched, if your app is resuming from a backgrounded state, iOS might call your ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,r.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) applicationWillEnterForeground:(UIApplication *)application {\n    [AEPMobileCore lifecycleStart:nil];\n}\n")),(0,r.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,r.mdx)("inlineCode",{parentName:"p"},"sceneWillEnterForeground")," method as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) sceneWillEnterForeground:(UIScene *)scene {\n    [AEPMobileCore lifecycleStart:nil];\n}\n")),(0,r.mdx)("p",null,"For more information on handling foregrounding applications with Scenes, refer to Apple's documentation ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground"},"here")),(0,r.mdx)("ol",{start:4},(0,r.mdx)("li",{parentName:"ol"},"When the app enters the background, pause Lifecycle data collection from your app's ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationDidEnterBackground:")," delegate method:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) applicationDidEnterBackground:(UIApplication *)application {\n    [AEPMobileCore lifecyclePause];\n}\n")),(0,r.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,r.mdx)("inlineCode",{parentName:"p"},"sceneDidEnterBackground")," method as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) sceneDidEnterBackground:(UIScene *)scene {\n    [AEPMobileCore lifecyclePause];\n}\n")),(0,r.mdx)("p",null,"For more information on handling backgrounding applications with Scenes, refer to Apple's documentation ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background"},"here")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-lifecycle-index-md-7c8af88e2e66616f696b.js.map