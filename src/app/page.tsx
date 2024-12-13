import React from "react";
import Header from "@/components/Header";
import CollectionSection from "@/components/collectionSection";
import EditorsSection from "@/components/editorsSection";
import FeatureProductSection from "@/components/featureProductSection";
import Productsection from "@/components/productSection";
import Universesection from "@/components/universesection";
import FeaturePostSection from "@/components/featurePostSection";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <CollectionSection />
      <EditorsSection />
      <FeatureProductSection />
      <Productsection />
      <Universesection />
      <FeaturePostSection />
      <Footer />
    </div>
  );
}
