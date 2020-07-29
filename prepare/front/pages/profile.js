import React from 'react';
import AppLayout from '../components1/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components1/NicknameEditForm';
import FollowList from '../components1/FollowList';

const Profile = () => {
    const followings = [{ nickname: 'following1' }, { nickname: 'following2' }, { nickname: 'following3' }];
    const followers = [{ nickname: 'follower1' }, { nickname: 'follower2' }, { nickname: 'follower3' }];

    return (
        <>
            <Head>
                <title>Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="Followings" data={followings} />
                <FollowList header="Followers" data={followers} />
            </AppLayout>
        </>
    );
}

export default Profile;



