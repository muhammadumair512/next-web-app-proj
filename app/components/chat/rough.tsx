<div className={cn(!feedbackDisabled && 'mb-[40px] !left-3.5 !right-3.5', 'absolute z-10 bottom-0 left-0 right-0 mb-2')}>
    <div className="p-[5.5px] max-h-[150px] bg-white border-[1.5px] border-gray-200 rounded-xl overflow-y-auto relative">
        {visionConfig?.enabled && (
            <>
                <div className="text-customDarkBlue border-2 flex items-center mb-2">
                    <ChatImageUploader
                        settings={visionConfig}
                        onUpload={onUpload}
                        disabled={files.length >= visionConfig.number_limits}
                    />
                    <div className='mx-1 w-[1px] h-4 bg-black/5' />
                    <div className='pl-2 flex-grow'>
                        <ImageList
                            list={files}
                            onRemove={onRemove}
                            onReUpload={onReUpload}
                            onImageLinkLoadSuccess={onImageLinkLoadSuccess}
                            onImageLinkLoadError={onImageLinkLoadError}
                        />
                    </div>
                </div>
            </>
        )}

        <Textarea
            className={`border-2 border-[#6FFFE6] rounded-lg
        block w-full mr-1 px-2 pr-[130px] py-[7px] leading-5 max-h-none text-sm text-gray-700 outline-none appearance-none resize-none
        ${visionConfig?.enabled ? 'pl-12' : ''}
      `}
            value={query}
            onChange={handleContentChange}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            autoSize
        />

        <div className="absolute bottom-2 right-2 flex items-center h-8">
            <div className={`${s.count} mr-2 h-5 leading-5 text-sm bg-gray-50 text-gray-500`}>
                {query.trim().length}
            </div>
            <Tooltip
                selector='send-tip'
                htmlContent={
                    <div>
                        <div>{t('common.operation.send')} Enter</div>
                        <div>{t('common.operation.lineBreak')} Shift Enter</div>
                    </div>
                }
            >
                <div className={`${s.sendBtn} hover:bg-customDarkBlue w-8 h-8 cursor-pointer rounded-md`} onClick={handleSend}></div>
            </Tooltip>
        </div>
    </div>
</div>
