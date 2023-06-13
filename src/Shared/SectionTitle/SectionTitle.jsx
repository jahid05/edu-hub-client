const SectionTitle = ({title, subTitle, description}) => {
    return (
        <div className="text-center pb-14">
            <p className="text-lg font-bold text-theme-200 mb-2">{subTitle}</p>
            <h1 className="text-4xl font-custom-200 font-bold text-theme-100">{title}</h1>
            <p className="text-lg text-slate-500">{description}</p>
        </div>
    );
};

export default SectionTitle;