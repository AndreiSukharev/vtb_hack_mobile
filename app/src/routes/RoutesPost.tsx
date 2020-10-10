import React from "react";

import {EnumPostRoutes, PostStack} from "../types/routes-type/routes-post-types";
import Posts from "../screens/main/posts/Posts";
import Post from "../screens/main/posts/Post";

const RoutesPost: React.FC<any> = ({}) => {
    return (
            <PostStack.Navigator
                initialRouteName={EnumPostRoutes.posts}
            >
                <PostStack.Screen name={EnumPostRoutes.posts} component={Posts}/>
                <PostStack.Screen name={EnumPostRoutes.post} component={Post}/>
            </PostStack.Navigator>
    )
};

export default RoutesPost;
