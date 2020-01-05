import React from "react";
import { DrizzleProvider } from "@drizzle/react-plugin";
import { LoadingContainer } from "@drizzle/react-components";

import Layout from '../components/Layout'
import drizzleOptions from "../drizzleOptions";
import MyContainer from "../container/MyContainer";

const Index = () => (
    <Layout>
        <DrizzleProvider options={drizzleOptions}>
            <LoadingContainer>
                <MyContainer />
            </LoadingContainer>
        </DrizzleProvider>
    </Layout>
)

export default Index