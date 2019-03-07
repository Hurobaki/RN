//
//  Counter.swift
//  firelabs
//
//  Created by THE3796 on 24/02/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Counter)
class Counter : NSObject {
  
  private var count = 0
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func increment() {
    count += 1
    print ("count is \(count)")
  }
  
  // get count value to JS from native
  @objc
  func getCount(_ callback: RCTResponseSenderBlock) {
    callback([count])
  }
  
  //Promise
  @objc
  func decrement(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    if (count == 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("E_COUNT", "count cannot be negative", error)
    } else {
      count -= 1
      resolve("count was decremented")
    }
  }
  
}
