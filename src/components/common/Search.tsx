import { IconButton, Input } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState, useRef, ChangeEventHandler, FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const CustomSearch = ({ onClose }: { onClose?: () => void }) => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [t] = useTranslation('global')

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setValue(value)
  }

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    value && params.set('name', value)
    value && navigate({ pathname: '/search', search: params.toString() })
    setValue('')
    onClose && onClose()
    inputRef.current && inputRef.current.blur()
  }

  return (
    <form className="relative flex w-full gap-2" onSubmit={handleOnSubmit}>
      <Input
        inputRef={inputRef}
        type="search"
        label={`${t('lang.search')}`}
        color="pink"
        className="pr-10 min-w-[230px] dark:text-gray-200  dark:focus:border-gray-200 dark:focus:border-t-transparent dark:placeholder-shown:border-gray-200"
        // className="pr-10 min-w-[230px] dark:text-gray-200  dark:border-gray-200 dark:focus:border-gray-200  dark:focus:border-t-transparent"
        value={value}
        onChange={handleOnChange}
        labelProps={{
          className: 'dark:peer-placeholder-shown:text-gray-200 dark:peer-focus:text-gray-200 dark:text-gray-200 dark:peer-focus:before:!border-gray-200 dark:peer-focus:after:!border-gray-200'
        }}
      />
      <IconButton className="!absolute right-1 dark:text-gray-200" variant="text" color="pink" type="submit" >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </IconButton>
    </form>
  )
}
