/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Card } from '../models/Card';
import type { Community } from '../models/Community';
import type { UserStats } from '../models/UserStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * カード一覧取得
     * 自分のデッキを取得
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getCards(): CancelablePromise<{
        cards: Array<Card>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cards',
        });
    }
    /**
     * カードをデッキに追加
     * @param requestBody
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static addCardToDeck(
        requestBody: string,
    ): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cards',
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
    /**
     * 自分のカード取得
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getMyCard(): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cards/me',
        });
    }
    /**
     * 指定したカード取得
     * デッキにないカードも取得できる
     * @param githubId
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getCard(
        githubId: string,
    ): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cards/{githubId}',
            path: {
                'githubId': githubId,
            },
        });
    }
    /**
     * カードをデッキから削除
     * @param githubId
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static removeCardFromDeck(
        githubId: string,
    ): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cards/{githubId}',
            path: {
                'githubId': githubId,
            },
        });
    }
    /**
     * コミュニティ一覧取得
     * 自分が入っているコミュニティ一覧取得
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getCommunities(): CancelablePromise<{
        communities: Array<Community>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/communities',
        });
    }
    /**
     * コミュニティを作成
     * @param requestBody
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static createCommunity(
        requestBody: string,
    ): CancelablePromise<{
        community: Community;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/communities',
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
    /**
     * 指定したコミュニティ取得
     * @param id
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getCommunity(
        id: string,
    ): CancelablePromise<{
        community: Community;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/communities/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * コミュニティを削除
     * @param id
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static deleteCommunity(
        id: string,
    ): CancelablePromise<{
        community: Community;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/communities/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 指定したコミュニティのカード一覧取得
     * @param id
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getCommunityCards(
        id: string,
    ): CancelablePromise<{
        cards: Array<Card>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/communities/{id}/cards',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 指定したコミュニティに自分のカードを追加
     * @param id
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static addCardToCommunity(
        id: string,
    ): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/communities/{id}/cards',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 指定したコミュニティの自分のカードを削除
     * @param id
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static removeCardFromCommunity(
        id: string,
    ): CancelablePromise<{
        card: Card;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/communities/{id}/cards',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 自分の統計情報取得
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getMyStats(): CancelablePromise<{
        stats: UserStats;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/me',
        });
    }
    /**
     * ユーザーの統計情報取得
     * @param githubId
     * @returns any The request has succeeded.
     * @throws ApiError
     */
    public static getUserStats(
        githubId: string,
    ): CancelablePromise<{
        stats: UserStats;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/{githubId}',
            path: {
                'githubId': githubId,
            },
        });
    }
}
