import React from 'react';
import AppLayout from '../components1/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components1/NicknameEditForm';
import FollowList from '../components1/FollowList';

const Profile = () => {
    const followers = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
    const followings = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];

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



