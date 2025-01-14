---
title: Profile release notes
description: The release notes for the Profile mobile extension.
keywords:
- Profile
- Release notes
---

# Release Notes

## July 26, 2023

### Android UserProfile 2.0.1

* Updated POM file with the Apache 2 license.

## Jun 5, 2023

### iOS UserProfile 4.0.0

Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## Jan 31, 2023

### Android UserProfile 2.0.0

* Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-userprofile-android).
* The following APIs have been deprecated and will be removed in a future release:

  | Deprecated API | Recommended Alternative |
  | -------------- | ----------------------- |
  | `UserProfile.updateUserAttribute()` | `UserProfile.updateUserAttributes()` |
  | `UserProfile.removeUserAttribute()` | `UserProfile.removeUserAttributes()` |

## Jul 2, 2021

### iOS AEPUserProfile 3.0.1

* Fixed a bug preventing proper data migration when presented with an `app group` .

## Feb 5, 2021

### iOS AEPUserProfile 3.0.0

* Released the brand new Adobe Experience Platform User Profile Swift SDK. It is [open sourced on GitHub](https://github.com/adobe/aepsdk-userprofile-ios).
