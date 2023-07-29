// import React, { useState, useEffect } from 'react'
import { Dialog, DialogBody, DialogFooter, Typography, IconButton } from '@material-tailwind/react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { ModalProps } from '@types'

export const TrailerModal = ({ open, trailerKey, t, handleClosed }: ModalProps) => {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  }

  return (
    <>
      <Dialog open={open} handler={handleClosed} className="dark:bg-slate-950">
        <DialogBody divider className="h-[35rem] border-t-0 border-b-0">
          {trailerKey ? (
            <YouTube videoId={trailerKey} opts={opts} className="h-full" />
          ) : (
            <div className="h-full flex justify-center items-center">
              <Typography className="font-normal text-pink-400 dark:text-gray-200">
                {t('lang.noTrailer')}
              </Typography>
            </div>
          )}
        </DialogBody>
        <DialogFooter className="p-0">
          <IconButton
            className=" -bottom-5 -right-5  outline-none text-pink-400 dark:text-pink-300"
            variant="text"
            onClick={handleClosed}
          >
            <XCircleIcon strokeWidth={2} className="h-10 w-10" onClick={handleClosed} />
          </IconButton>
        </DialogFooter>
      </Dialog>
    </>
  )
}
