import React from 'react';
import AppLayout from '../components1/AppLayout'
import { useSelector } from 'react-redux';
import PostCard from '../components1/PostCard';
import PostForm from '../components1/PostForm';

const Home = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const mainPosts = useSelector(state => state.post.mainPosts);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => (<PostCard key={c.id} post={c} />))}
        </AppLayout>
    );
}

export default Home;