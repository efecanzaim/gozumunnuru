import React from 'react';

export const MobileIcons = () => (

    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', display: 'none' }}>
        <defs>
            <symbol id="icon-hamburger" viewBox="0 0 32 32">
                <title>hamburger</title>
                <path d="M32 6v4h-32v-4h32zM32 14v4h-32v-4h32zM32 22v4h-32v-4h32z"></path>
            </symbol>
            <symbol id="icon-search" viewBox="0 0 32 32">
                <title>search</title>
                <path d="M24.848 21.965l6.591 6.587c0.347 0.365 0.561 0.861 0.561 1.406 0 1.128-0.914 2.042-2.042 2.042-0.545 0-1.040-0.214-1.406-0.562l0.001 0.001-6.587-6.589c-2.259 1.686-5.106 2.699-8.19 2.699-7.608 0-13.775-6.167-13.775-13.775s6.167-13.775 13.775-13.775c7.608 0 13.775 6.167 13.775 13.775 0 3.084-1.013 5.931-2.725 8.227l0.026-0.036zM13.776 23.467c5.353 0 9.692-4.339 9.692-9.692s-4.339-9.692-9.692-9.692v0c-5.353 0-9.692 4.339-9.692 9.692s4.339 9.692 9.692 9.692v0z"></path>
            </symbol>
            <symbol id="icon-user" viewBox="0 0 32 32">
                <title>user</title>
                <path d="M16 16c-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8s-3.582 8-8 8zM16 12c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4zM1.286 22.753c3.872-3.576 8.776-5.363 14.714-5.363s10.842 1.788 14.714 5.363c0.82 0.757 1.286 1.823 1.286 2.939v2.333c0 2.196-1.78 3.976-3.976 3.976h-24.048c-2.196 0-3.976-1.78-3.976-3.976v-2.333c0-1.116 0.466-2.181 1.286-2.939zM4.716 24.313c-0.45 0.38-0.709 0.939-0.709 1.528l-0 0.857c0 0 0 0 0 0 0 0.957 0.776 1.733 1.733 1.733h20.535c0.957 0 1.733-0.776 1.733-1.733v-0.855c0-0.59-0.26-1.15-0.711-1.53l-0 0c-2.658-2.24-6.423-3.359-11.294-3.359s-8.633 1.12-11.284 3.359z"></path>
            </symbol>
            <symbol id="icon-bag" viewBox="0 0 32 32">
                <title>bag</title>
                <path d="M8 8c0-4.418 3.582-8 8-8s8 3.582 8 8v0h8v20c0 2.209-1.791 4-4 4v0h-24c-2.209 0-4-1.791-4-4v0-20h8zM12 8h8c0-2.209-1.791-4-4-4s-4 1.791-4 4v0z"></path>
            </symbol>
            <symbol id="icon-favorite" viewBox="0 0 32 32">
                <title>favorite</title>
                <path d="M23.2 0c-2.784 0-5.456 1.324-7.2 3.417-1.744-2.093-4.416-3.417-7.2-3.417-4.928 0-8.8 3.956-8.8 8.992 0 6.18 5.44 11.215 13.68 18.866l2.32 2.142 2.32-2.158c8.24-7.635 13.68-12.67 13.68-18.85 0-5.035-3.872-8.992-8.8-8.992z"></path>
            </symbol>
            {/* Add more icons here as needed */}
        </defs>
    </svg>
);

export const IconHamburger = () => (
    <svg viewBox="0 0 32 32" width="16" height="16">
        <use xlinkHref="#icon-hamburger" />
    </svg>
);

export const IconSearch = () => (
    <svg viewBox="0 0 32 32" width="20" height="20">
        <use xlinkHref="#icon-search" />
    </svg>
);

export const IconUser = () => (
    <svg viewBox="0 0 32 32" width="20" height="20">
        <use xlinkHref="#icon-user" />
    </svg>
);

export const IconBag = () => (
    <svg viewBox="0 0 32 32" width="20" height="20">
        <use xlinkHref="#icon-bag" />
    </svg>
);

export const IconFavorite = () => (
    <svg viewBox="0 0 32 32" width="20" height="20">
        <use xlinkHref="#icon-favorite" />
    </svg>
);
