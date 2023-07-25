"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8129],{38942:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return x}});var a,i=t(87462),r=t(63366),d=(t(15007),t(64983)),l=t(91515),m=["components"],p={},o=(a="Variant",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:p},c=l.Z;function x(e){var n=e.components,t=(0,r.Z)(e,m);return(0,d.mdx)(c,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)(o,{platform:"android",api:"extension-version",repeat:"8",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion();\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"String extensionVersion = Edge.extensionVersion();\n")),(0,d.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"val extensionVersion = EdgeBridge.extensionVersion()\n")),(0,d.mdx)(o,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"static let extensionVersion\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"let extensionVersion = Edge.extensionVersion\n")),(0,d.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (nonnull NSString*) extensionVersion;\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *extensionVersion = [AEPMobileEdge extensionVersion];\n")),(0,d.mdx)(o,{platform:"android",api:"get-location-hint",repeat:"9",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-1"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void getLocationHint(final AdobeCallback<String> callback)\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"callback")," is invoked with the location hint. The location hint value may be null if the location hint expired or was not set. The callback may be invoked on a different thread. If ",(0,d.mdx)("inlineCode",{parentName:"li"},"AdobeCallbackWithError")," is provided, the default timeout is 1000ms and the ",(0,d.mdx)("inlineCode",{parentName:"li"},"fail")," method is called if the operation times out or an unexpected error occurs.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Edge.getLocationHint(new AdobeCallbackWithError<String>() {\n    @Override\n    public void call(final String hint) {\n        // Handle the hint here\n    }\n\n    @Override\n    public void fail(AdobeError adobeError) {\n        // Handle the error here\n    }\n});\n")),(0,d.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Edge.getLocationHint(object: AdobeCallbackWithError<String> {\n    override fun call(hint: String) {\n      // Handle the hint here\n    }\n    override fun fail(error: AdobeError?) {\n      // Handle the error here\n    }\n})\n")),(0,d.mdx)(o,{platform:"ios",api:"get-location-hint",repeat:"11",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-1"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"static func getLocationHint(completion: @escaping (String?, Error?) -> Void)\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"completion")," is invoked with the location hint, or an ",(0,d.mdx)("inlineCode",{parentName:"li"},"AEPError")," if the request times out or an unexpected error occurs. The location hint value may be nil if the location hint expired or was not set. The default timeout is 1000ms. The completion handler may be invoked on a different thread.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"Edge.getLocationHint { (hint, error) in\n  if let error = error {\n    // Handle the error here\n  } else {\n    // Handle the location hint here\n  }\n}\n")),(0,d.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) getLocationHint:^(NSString * _Nullable hint, NSError * _Nullable error)completion\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[AEPMobileEdge getLocationHint:^(NSString *hint, NSError *error) {   \n    // handle the error and the hint here\n}];\n")),(0,d.mdx)(o,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-2"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension();\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Edge.registerExtension();\n")),(0,d.mdx)(o,{platform:"ios",api:"register-extension",repeat:"12",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-2"},"Swift"),(0,d.mdx)("p",null,"Use the MobileCore API to register the Edge extension."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"// MobileCore\npublic static func registerExtensions(_ extensions: [Extension.Type], _ completion: (() -> Void)? = nil)\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPEdge\n\n...\nMobileCore.registerExtensions([Edge.self, ...], {\n  // Processing after registration\n})\n")),(0,d.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,d.mdx)("p",null,"Use the AEPMobileCore API to register the Edge extension."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions \n                  completion: (void (^ _Nullable)(void)) completion;\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPEdge;\n\n[AEPMobileCore registerExtensions:@[AEPMobileEdge.class] completion:nil];...\n\n")),(0,d.mdx)(o,{platform:"android",api:"send-event",repeat:"13",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-3"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void sendEvent(final ExperienceEvent experienceEvent, final EdgeCallback callback);\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"experienceEvent")," - the XDM ",(0,d.mdx)("a",{parentName:"li",href:"#experienceevent"},"Experience Event")," to be sent to Adobe Experience Platform Edge Network"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"completion")," - optional callback to be invoked when the request is complete, returning the associated ",(0,d.mdx)("a",{parentName:"li",href:"#edgeeventhandle"},"EdgeEventHandle(s)")," received from the Adobe Experience Platform Edge Network. It may be invoked on a different thread.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Create Experience Event from map\nMap<String, Object> xdmData = new HashMap<>();\nxdmData.put("eventType", "SampleXDMEvent");\nxdmData.put("sample", "data");\n    \nExperienceEvent experienceEvent = new ExperienceEvent.Builder()\n  .setXdmSchema(xdmData)\n  .build();\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"// Example 1 - send the Experience Event without handling the Edge Network response\nEdge.sendEvent(experienceEvent, null);\n")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"// Example 2 - send the Experience Event and handle the Edge Network response onComplete\nEdge.sendEvent(experienceEvent, new EdgeCallback() {\n  @Override\n  public void onComplete(final List<EdgeEventHandle> handles) {\n        // Handle the Edge Network response \n  }\n});\n")),(0,d.mdx)("h4",{id:"kotlin-2"},"Kotlin"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Create Experience Event from map\nval xdmData = mutableMapOf<String, Any>()\nxdmData["eventType"] = "SampleXDMEvent"\nxdmData["sample"] = "data"\n\nval experienceEvent = ExperienceEvent.Builder()\n  .setXdmSchema(xdmData)\n  .build()\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"// Example 1 - send the Experience Event without handling the Edge Network response\nEdge.sendEvent(experienceEvent, null)\n")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"// Example 2 - send the Experience Event and handle the Edge Network response onComplete\nEdge.sendEvent(experienceEvent) {\n  // Handle the Edge Network response \n}\n")),(0,d.mdx)(o,{platform:"ios",api:"send-event",repeat:"15",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-3"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"static func sendEvent(experienceEvent: ExperienceEvent, _ completion: (([EdgeEventHandle]) -> Void)? = nil)\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"experienceEvent")," - the XDM ",(0,d.mdx)("a",{parentName:"li",href:"#experienceevent"},"Experience Event")," to be sent to Adobe Experience Platform Edge Network"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"completion")," - optional callback to be invoked when the request is complete, returning the associated ",(0,d.mdx)("a",{parentName:"li",href:"#edgeeventhandle"},"EdgeEventHandle(s)")," received from the Adobe Experience Platform Edge Network. It may be invoked on a different thread.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'// Create Experience Event from dictionary:\nvar xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",\n                              "sample": "data"]\nlet experienceEvent = ExperienceEvent(xdm: xdmData)\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"// Example 1 - send the Experience Event without handling the Edge Network response\nEdge.sendEvent(experienceEvent: experienceEvent)\n")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"// Example 2 - send the Experience Event and handle the Edge Network response onComplete\nEdge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in\n            // Handle the Edge Network response\n        }\n")),(0,d.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) sendExperienceEvent:(AEPExperienceEvent * _Nonnull) completion:^(NSArray<AEPEdgeEventHandle *> * _Nonnull)completion\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// Create Experience Event from dictionary:\nNSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};\nNSDictionary *data = @{ @"sample" : @"data"};\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"// Example 1 - send the Experience Event without handling the Edge Network response\n[AEPMobileEdge sendExperienceEvent:event completion:nil];\n")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"// Example 2 - send the Experience Event and handle the Edge Network response onComplete\n[AEPMobileEdge sendExperienceEvent:event completion:^(NSArray<AEPEdgeEventHandle *> * _Nonnull handles) {\n  // handle the Edge Network response\n}];\n")),(0,d.mdx)(o,{platform:"android",api:"set-location-hint",repeat:"9",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-4"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void setLocationHint(final String hint)\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"hint")," the Edge Network location hint to use when connecting to the Adobe Experience Platform Edge Network.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Edge.setLocationHint(hint);\n")),(0,d.mdx)("h4",{id:"kotlin-3"},"Kotlin"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Edge.setLocationHint(hint)\n")),(0,d.mdx)(o,{platform:"ios",api:"set-location-hint",repeat:"11",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-4"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc(setLocationHint:)\npublic static func setLocationHint(_ hint: String?)\n")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"hint")," the Edge Network location hint to use when connecting to the Adobe Experience Platform Edge Network.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"Edge.setLocationHint(hint)\n")),(0,d.mdx)("h4",{id:"objective-c-4"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) setLocationHint: (NSString * _Nullable hint);\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[AEPMobileEdge setLocationHint:hint];\n")),(0,d.mdx)(o,{platform:"android",api:"xdm-schema",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-5"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"/**\n * The interface that represents an Experience XDM event data schema.\n */\npublic interface Schema {\n\n    /**\n     * Returns the version of this schema as defined in the Adobe Experience Platform.\n     * @return the version of this schema.\n     */\n    String getSchemaVersion();\n\n    /**\n     * Returns the identifier for this schema as defined in the Adobe Experience Platform.\n     * The identifier is a URI where this schema is defined.\n     * @return the URI identifier for this schema.\n     */\n    String getSchemaIdentifier();\n\n    /**\n     * Returns the identifier for this dataset as defined in the Adobe Experience Platform.\n     * @return the dataset ID\n     */\n    String getDatasetIdentifier();\n\n    /**\n     * Serialize this {@code Schema} object to a map with the same format as its XDM schema.\n     * @return the XDM-formatted map of this {@code Schema} object.\n     */\n    Map<String, Object> serializeToXdm();\n}\n")),(0,d.mdx)("p",null,"By implementing the ",(0,d.mdx)("strong",{parentName:"p"},"Property")," interface, you can define complex properties for your XDM Schema. A complex property is defined as not being a primitive type, String, or Date."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public interface Property {\n\n    /**\n     * Serialize this {@code Property} object to a map with the same format as its XDM schema.\n     * @return XDM-formatted map of this {@code Property} object.\n     */\n    Map<String, Object> serializeToXdm();\n}\n")),(0,d.mdx)("p",null,"When defining your custom XDM schema(s), implement these interfaces to ensure that the AEP Edge extension successfully serializes the provided data before sending it to Adobe Experience Platform Edge Network."),(0,d.mdx)(o,{platform:"ios",api:"xdm-schema",repeat:"2",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-5"},"Swift"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"/// An interface representing a Platform XDM Event Data schema.\npublic protocol XDMSchema: Encodable {\n\n    /// Returns the version of this schema as defined in the Adobe Experience Platform.\n    /// - Returns: The version of this schema\n    var schemaVersion: String { get }\n\n    /// Returns the identifier for this schema as defined in the Adobe Experience Platform.\n    /// The identifier is a URI where this schema is defined.\n    /// - Returns: The URI identifier for this schema\n    var schemaIdentifier: String { get }\n\n    /// Returns the identifier for this dataset as defined in the Adobe Experience Platform.\n    /// This is a system generated identifier for the Dataset the event belongs to.\n    /// - Returns: The  identifier as a String for this dataset\n    var datasetIdentifier: String { get }\n}\n")),(0,d.mdx)(o,{platform:"android",api:"edge-event-handle",repeat:"2",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-6"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"/**\n * The {@link EdgeEventHandle} is a response fragment from Adobe Experience Edge Service for a sent XDM Experience Event.\n * One event can receive none, one or multiple {@link EdgeEventHandle}(s) as response.\n */\npublic class EdgeEventHandle {\n  /**\n     * @return the payload type or null if not found in the {@link JSONObject} response\n     */\n  public String getType() {...}\n\n  /**\n     * @return the event payload values for this {@link EdgeEventHandle} or null if not found in the {@link JSONObject} response\n     */\n  public List<Map<String, Object>> getPayload() {...}\n}\n")),(0,d.mdx)(o,{platform:"ios",api:"edge-event-handle",repeat:"2",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-6"},"Swift"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc(AEPEdgeEventHandle)\npublic class EdgeEventHandle: NSObject, Codable {\n    /// Payload type\n    @objc public let type: String?\n\n    /// Event payload values\n    @objc public let payload: [[String: Any]]?\n}\n")),(0,d.mdx)(o,{platform:"android",api:"experience-event",repeat:"6",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-7"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-Java"},"public final class ExperienceEvent {\n\n  public static class Builder {\n    ...\n\n    public Builder() {\n      ...\n    }\n\n    /**\n      * Sets free form data associated with this event to be passed to Adobe Experience Edge.\n      *\n      * @param data free form data, JSON like types are accepted\n      * @return instance of current builder\n      * @throws UnsupportedOperationException if this instance was already built\n      */\n    public Builder setData(final Map<String, Object> data) {...}\n\n    /**\n      * Solution specific XDM event data for this event.\n      *\n      * @param xdm {@link Schema} information\n      * @return instance of current builder\n      * @throws UnsupportedOperationException if this instance was already built\n      */\n    public Builder setXdmSchema(final Schema xdm) {...}\n\n    /**\n      * Solution specific XDM event data and dataset identifier for this event.\n      *\n      * @param xdm {@code Map<String, Object>} of raw XDM schema data\n      * @param datasetIdentifier The Experience Platform dataset identifier where this event is sent.\n      *                          If not provided, the default dataset defined in the configuration ID is used\n      * @return instance of current builder\n      * @throws UnsupportedOperationException if this instance was already built\n      */\n    public Builder setXdmSchema(final Map<String, Object> xdm, final String datasetIdentifier) {...}\n\n    /**\n      * Solution specific XDM event data for this event, passed as raw mapping of keys and\n      * Object values.\n      *\n      * @param xdm {@code Map<String, Object>} of raw XDM schema data\n      * @return instance of current builder\n      * @throws UnsupportedOperationException if this instance was already built\n      */\n    public Builder setXdmSchema(final Map<String, Object> xdm) {...}\n\n    /**\n      * Builds and returns a new instance of {@code ExperienceEvent}.\n      *\n      * @return a new instance of {@code ExperienceEvent} or null if one of the required parameters is missing\n      * @throws UnsupportedOperationException if this instance was already built\n      */\n    public ExperienceEvent build() {...}\n  }\n\n  public Map<String, Object> getData() {...}\n\n  public Map<String, Object> getXdmSchema() {...} \n}  \n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Examples")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Example 1\n// Create Experience Event with both XDM and freeform data using maps\nMap<String, Object> xdmData = new HashMap<>();\nxdmData.put("eventType", "SampleXDMEvent");\nxdmData.put("sample", "data");\n\nMap<String, Object> data = new HashMap<>();\ndata.put("free", "form");\ndata.put("data", "example");\n\nExperienceEvent experienceEvent = new ExperienceEvent.Builder()\n  .setXdmSchema(xdmData)\n  .setData(data)\n  .build();\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Example 2\n// Create Experience Event from XDM Schema implementation\npublic class XDMSchemaExample implements com.adobe.marketing.mobile.xdm.Schema {\n  private String eventType;\n  private String otherField;\n      ...\n\n      public String getEventType() {\n        return this.eventType;\n      }\n\n      public void setEventType(final String newValue) {\n        this.eventType = newValue;\n      }\n\n      public String getOtherField() {\n        return this.otherField;\n      }\n\n      public void setOtherField(final String newValue) {\n        this.otherField = newValue;\n      }\n      }\n\n// Create Experience Event from Schema\nXDMSchemaExample xdmData = new XDMSchemaExample();\nxdmData.setEventType("SampleXDMEvent");\nxdmData.setOtherField("OtherFieldValue");\n\nExperienceEvent experienceEvent = new ExperienceEvent.Builder()\n  .setXdmSchema(xdmData)\n  .build();\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Example 3\n// Set the destination Dataset identifier to the current Experience Event\nMap<String, Object> xdmData = new HashMap<>();\nxdmData.put("eventType", "SampleXDMEvent");\nxdmData.put("sample", "data");\n\nExperienceEvent experienceEvent = new ExperienceEvent.Builder()\n  .setXdmSchema(xdmData, "datasetIdExample")\n  .build();\n')),(0,d.mdx)(o,{platform:"ios",api:"experience-event",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc(AEPExperienceEvent)\npublic class ExperienceEvent: NSObject {\n\n    /// XDM formatted data, use an `XDMSchema` implementation for a better XDM data injection and format control\n    @objc public let xdm: [String: Any]?\n\n    /// Optional free-form data associated with this event\n    @objc public let data: [String: Any]?\n\n    /// Adobe Experience Platform dataset identifier, if not set the default dataset identifier set in the Edge Configuration is used\n    @objc public let datasetIdentifier: String?\n\n    /// Initialize an Experience Event with the provided event data\n    /// - Parameters:\n    ///   - xdm:  XDM formatted data for this event, passed as a raw XDM Schema data dictionary.\n    ///   - data: Any free form data in a [String : Any] dictionary structure.\n    ///   - datasetIdentifier: The Experience Platform dataset identifier where this event should be sent to; if not provided, the default dataset identifier set in the Edge configuration is used\n    @objc public init(xdm: [String: Any], data: [String: Any]? = nil, datasetIdentifier: String? = nil) {...}\n\n    /// Initialize an Experience Event with the provided event data\n    /// - Parameters:\n    ///   - xdm: XDM formatted event data passed as an XDMSchema\n    ///   - data: Any free form data in a [String : Any] dictionary structure.\n    public init(xdm: XDMSchema, data: [String: Any]? = nil) {...}\n}\n")),(0,d.mdx)("h4",{id:"swift-7"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Examples")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'// Example 1\n// Create Experience Event with both XDM and freeform data using dictionaries\nvar xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",\n                              "sample": "data"]\n\nlet experienceEvent = ExperienceEvent(xdm: xdmData, data: ["free": "form", "data": "example"])\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'// Example 2\n// Create Experience Event from XDM Schema implementation\nimport AEPEdge\n\npublic struct XDMSchemaExample : XDMSchema {\n    public let schemaVersion = "1.0" // Returns the version of this schema as defined in the Adobe Experience Platform.\n    public let schemaIdentifier = "" // The URI identifier for this schema\n    public let datasetIdentifier = "" // The identifier for the Dataset this event belongs to.\n\n    public init() {}\n\n    public var eventType: String?\n    public var otherField: String?\n\n    enum CodingKeys: String, CodingKey {\n    case eventType = "eventType"\n    case otherField = "otherField"\n    }       \n}\n\nextension XDMSchemaExample {\n    public func encode(to encoder: Encoder) throws {\n      var container = encoder.container(keyedBy: CodingKeys.self)\n      if let unwrapped = eventType { try container.encode(unwrapped, forKey: .eventType) }\n      if let unwrapped = otherField { try container.encode(unwrapped, forKey: .otherField) }\n    }\n}\n...\n\n// Create Experience Event from XDMSchema\nvar xdmData = XDMSchemaExample()\nxdmData.eventType = "SampleXDMEvent"\nxdm.otherField = "OtherFieldValue"\nlet event = ExperienceEvent(xdm: xdmData)\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'// Example 3\n// Set the destination Dataset identifier to the current Experience Event\nvar xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",\n                              "sample": "data"]\n\nlet experienceEvent = ExperienceEvent(xdm: xdmData, datasetIdentifier: "datasetIdExample")\n')),(0,d.mdx)("h4",{id:"objective-c-5"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Examples")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// Example 1\n// Create Experience Event with both XDM and freeform data using dictionaries\nNSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};\nNSDictionary *data = @{ @"sample" : @"data"};\n    \n    AEPExperienceEvent *event = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:data datasetIdentifier:nil];\n')),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// Example 2\n// Set the destination Dataset identifier to the current Experience Event\nNSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};\n   \nAEPExperienceEvent *event = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil datasetIdentifier:@"datasetIdExample"];\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=66993cd172f17c2cdc80fb9509105b27ec7217fc-2ba22739dce452cdbc95.js.map