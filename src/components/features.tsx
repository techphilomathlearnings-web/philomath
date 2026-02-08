import FeatureCard from "./feature-card"

const Features = () => {
    return (
        <div className="hero bg-base-100 pt-20 pb-12">
            <div className="hero-content text-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Why choose us?</h1>
                        <p className="text-xl">
                            Our most comprehensive and impactful learning experiences
                        </p>
                    </div>
                    <div className="flex gap-4 md:gap-12 flex-wrap justify-center lg:flex-nowrap">
                        <FeatureCard
                            title="Personal Attention"
                            description="Small batch sizes to focus on every student individually."
                        />
                        <FeatureCard
                            title="Practical Learning"
                            description="Hands-on coding practice with real exam oriented programs."
                        />
                        <FeatureCard
                            title="Regular Tests"
                            description="Frequent mock tests and feedback for continuous improvement."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features