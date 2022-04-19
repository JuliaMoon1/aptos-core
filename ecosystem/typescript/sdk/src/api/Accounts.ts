/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  Account,
  AccountResource,
  Address,
  AptosError,
  Event,
  LedgerVersion,
  MoveModule,
  MoveStructTagId,
  OnChainTransaction,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Accounts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags accounts
   * @name GetAccount
   * @summary Get account
   * @request GET:/accounts/{address}
   */
  getAccount = (address: Address, params: RequestParams = {}) =>
    this.http.request<Account, AptosError>({
      path: `/accounts/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags accounts
   * @name GetAccountResources
   * @summary Get account resources
   * @request GET:/accounts/{address}/resources
   */
  getAccountResources = (address: Address, query?: { version?: LedgerVersion }, params: RequestParams = {}) =>
    this.http.request<AccountResource[], AptosError>({
      path: `/accounts/${address}/resources`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags accounts
   * @name GetAccountModules
   * @summary Get account modules
   * @request GET:/accounts/{address}/modules
   */
  getAccountModules = (address: Address, query?: { version?: LedgerVersion }, params: RequestParams = {}) =>
    this.http.request<MoveModule[], AptosError>({
      path: `/accounts/${address}/modules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags transactions
   * @name GetAccountTransactions
   * @summary Get account transactions
   * @request GET:/accounts/{address}/transactions
   */
  getAccountTransactions = (address: Address, query?: { start?: number; limit?: number }, params: RequestParams = {}) =>
    this.http.request<OnChainTransaction[], AptosError>({
      path: `/accounts/${address}/transactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This API extracts event key from the account resource identified by the `event_handle_struct` and `field_name`, then returns events identified by the event key.
   *
   * @tags events
   * @name GetEventsByEventHandle
   * @summary Get events by event handle
   * @request GET:/accounts/{address}/events/{event_handle_struct}/{field_name}
   */
  getEventsByEventHandle = (
    address: Address,
    eventHandleStruct: MoveStructTagId,
    fieldName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<Event[], AptosError>({
      path: `/accounts/${address}/events/${eventHandleStruct}/${fieldName}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
