import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpSchema, SignUpSchemaType } from '@/validation/login-schema'
import { RotateCw } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from './ui/use-toast'
import { register } from '@/actions/post-register'
import { setAuthorized, setUsername } from '@/stores/useAuthorizationStore'

type Props = {
  setIsRegister: (flag: boolean) => void
}

export default function RegisterCard({ setIsRegister }: Props) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    setLoading(true)
    register(data)
      .then(() => {
        toast({
          title: 'Register Success',
          description: 'The user has been correctly registered.',
        })
        setLoading(false)
        setUsername(data.username)
        setAuthorized(true)
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: 'Register Error',
          description: error.message,
        })
        setLoading(false)
      })
  }

  return (
    <>
      <div className="my-16 text-center">
        <div className="flex flex-col items-center justify-center mt-16">
          <Card className="w-[28rem]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Registration</CardTitle>
              <CardDescription>
                <>
                  <p>Please fill username, email and password below to login </p>
                  <p>your account</p>
                </>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 pb-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    placeholder="Enter your username"
                    {...registerForm('username')}
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">{errors.username.message}</span>
                  )}
                </div>
                <div className="grid gap-2 pb-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...registerForm('email')}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="grid gap-2 pb-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    {...registerForm('password')}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
                </div>

                {/* <div className="grid gap-2 pb-3">
                  <Label htmlFor="passwordConfirm">Password</Label>
                  <Input
                    id="passwordConfirm"
                    type="password"
                    placeholder="Confirm a password"
                    {...register('password')}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
                </div> */}

                <div className="mt-4">
                  <Button className="w-full " disabled={loading} type="submit">
                    {loading ? (
                      <RotateCw className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="place-content-center">
              <>
                <p>
                  Already have an account?
                  <span
                    className="inline-block cursor-pointer text-blue-500 ml-1 hover:underline"
                    onClick={() => {
                      setIsRegister(false)
                    }}
                  >
                    Login now
                  </span>
                </p>
              </>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
