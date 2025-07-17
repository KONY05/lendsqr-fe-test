function DetailsBox({title, value}: {title: string, value: string}) {
    return (
        <span className="space-y-2">
            <p className="text-xs text-[#545F7D] uppercase">{title}</p>
            <p className="text-sm font-medium break-all text-[#545F7D] md:text-[16px]">
              {value}
            </p>
          </span>
    )
}

export default DetailsBox
