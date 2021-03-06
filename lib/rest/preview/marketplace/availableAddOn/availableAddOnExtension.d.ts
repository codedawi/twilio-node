/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../../Marketplace');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the AvailableAddOnExtensionList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param availableAddOnSid - The available_add_on_sid
 */
declare function AvailableAddOnExtensionList(version: Marketplace, availableAddOnSid: string): AvailableAddOnExtensionListInstance;

interface AvailableAddOnExtensionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AvailableAddOnExtensionContext;
  /**
   * Streams AvailableAddOnExtensionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AvailableAddOnExtensionListInstanceEachOptions, callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a available_add_on_extension
   *
   * @param sid - The unique Extension Sid
   */
  get(sid: string): AvailableAddOnExtensionContext;
  /**
   * Retrieve a single target page of AvailableAddOnExtensionInstance records from
   * the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  /**
   * Lists AvailableAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AvailableAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionInstance[]) => any): Promise<AvailableAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AvailableAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface AvailableAddOnExtensionListInstanceEachOptions {
  callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface AvailableAddOnExtensionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AvailableAddOnExtensionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AvailableAddOnExtensionPayload extends AvailableAddOnExtensionResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnExtensionResource {
  available_add_on_sid: string;
  friendly_name: string;
  product_name: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface AvailableAddOnExtensionSolution {
  availableAddOnSid?: string;
}


declare class AvailableAddOnExtensionContext {
  /**
   * Initialize the AvailableAddOnExtensionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Marketplace, availableAddOnSid: string, sid: string);

  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AvailableAddOnExtensionInstance extends SerializableClass {
  /**
   * Initialize the AvailableAddOnExtensionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Marketplace, payload: AvailableAddOnExtensionPayload, availableAddOnSid: string, sid: string);

  private _proxy: AvailableAddOnExtensionContext;
  availableAddOnSid: string;
  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>;
  friendlyName: string;
  productName: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  url: string;
}


declare class AvailableAddOnExtensionPage extends Page<Marketplace, AvailableAddOnExtensionPayload, AvailableAddOnExtensionResource, AvailableAddOnExtensionInstance> {
  /**
   * Initialize the AvailableAddOnExtensionPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: AvailableAddOnExtensionSolution);

  /**
   * Build an instance of AvailableAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailableAddOnExtensionPayload): AvailableAddOnExtensionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AvailableAddOnExtensionContext, AvailableAddOnExtensionInstance, AvailableAddOnExtensionList, AvailableAddOnExtensionListInstance, AvailableAddOnExtensionListInstanceEachOptions, AvailableAddOnExtensionListInstanceOptions, AvailableAddOnExtensionListInstancePageOptions, AvailableAddOnExtensionPage, AvailableAddOnExtensionPayload, AvailableAddOnExtensionResource, AvailableAddOnExtensionSolution }
