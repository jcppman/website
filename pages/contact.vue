<template>
  <!-- Comments -->
  <div class="text-dim my-4">
    <div># Contact me directly</div>
    <div># Use this form to send me a message</div>
  </div>

  <!-- Success Message -->
  <div v-if="submitted" class="text-success mb-4 font-mono">
    ✔️ Message sent!
  </div>

  <!-- Form -->
  <form @submit.prevent="handleSubmit" name="contact" netlify novalidate>
    <!-- NAME Field -->
    <TerminalInput
      v-model="formData.name"
      label="NAME"
      name="name"
      :has-error="!!errors.name"
      :error-message="errors.name"
    />

    <!-- EMAIL Field -->
    <TerminalInput
      v-model="formData.email"
      label="EMAIL"
      type="email"
      name="email"
      :has-error="!!errors.email"
      :error-message="errors.email"
    />

    <!-- SUBJECT Field -->
    <TerminalInput
      v-model="formData.subject"
      label="SUBJECT"
      name="subject"
      :has-error="!!errors.subject"
      :error-message="errors.subject"
    />

    <!-- MESSAGE Field -->
    <TerminalTextarea
      v-model="formData.message"
      label="MESSAGE"
      name="message"
      :has-error="!!errors.message"
      :error-message="errors.message"
    />

    <!-- Buttons -->
    <div class="flex justify-center gap-4">
      <TerminalButton
        text="BACK"
        @click="navigateTo('/')"
      />
      <TerminalButton
        type="submit"
        text="SEND"
        :loading="isSubmitting"
        loading-text="SENDING..."
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'back',
})

// Form data
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const submitted = ref(false)
const isSubmitting = ref(false)
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Form validation
const validateForm = (): boolean => {
  // Reset all errors
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''
  
  let isValid = true
  
  // Validate name
  if (!formData.name.trim()) {
    errors.name = 'NAME is required'
    isValid = false
  }
  
  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'EMAIL is required'
    isValid = false
  } else if (!validateEmail(formData.email)) {
    errors.email = 'EMAIL format is invalid'
    isValid = false
  }
  
  // Validate subject
  if (!formData.subject.trim()) {
    errors.subject = 'SUBJECT is required'
    isValid = false
  }
  
  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'MESSAGE is required'
    isValid = false
  }
  
  return isValid
}

// Form submission
const handleSubmit = async () => {
  // Validate form
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Create FormData for Netlify
    const netlifyFormData = new FormData()
    netlifyFormData.append('form-name', 'contact')
    netlifyFormData.append('name', formData.name)
    netlifyFormData.append('email', formData.email)
    netlifyFormData.append('subject', formData.subject)
    netlifyFormData.append('message', formData.message)

    // Submit to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(netlifyFormData as any).toString()
    })

    if (response.ok) {
      submitted.value = true
      // Reset form
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error if needed
  } finally {
    isSubmitting.value = false
  }
}
</script>
